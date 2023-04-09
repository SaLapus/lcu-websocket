import { execSync } from "node:child_process";
import EventEmitter from "node:events";
import https from "node:https";

import axios, { Axios, AxiosInstance } from "axios";
import WebSocket from "ws";

import Cert from "./types/Cert";
import { EventMap, Events } from "./types/Events";
import LCU_Listener, { MESSAGE_TYPES, WAMPMessage } from "./types/Listener";

import { Paths, MethodsOf, InfoOf, PropertyOf } from "./types/Request/Info";

interface Creds {
  username: "riot";
  password: string;
  path: "127.0.0.1";
  port: number;
}

export async function authenticate() {
  try {
    const options = execSync(
      `Get-CimInstance -Query "SELECT * from Win32_Process WHERE name LIKE 'LeagueClientUx.exe'" | Select-Object CommandLine | fl`,
      { shell: "powershell.exe", encoding: "utf-8" }
    );

    const portRegex = /--app-port=([0-9]+)/;
    const passwordRegex = /--remoting-auth-token=(.+?)(?= *"| --)/;

    const [, port] = options.match(portRegex)!;
    const [, password] = options.match(passwordRegex)!;
    return {
      username: "riot",
      password,
      path: "127.0.0.1",
      port: Number(port),
    };
  } catch (e) {
    console.error(e);
  }
}

export class RiotWSInterface extends EventEmitter implements LCU_Listener {
  ws: WebSocket;
  request: AxiosInstance;

  constructor({ username, port, password }: Creds) {
    super();

    const wsConnection = `wss://${username}:${password}@127.0.0.1:${port}/`;
    this.ws = new WebSocket(wsConnection, "wamp", {
      ca: Cert,
    });
    this.ws.on("open", () => {});
    this.ws.on("message", handleWSMessage.bind(this));

    this.request = axios.create({
      baseURL: `https://127.0.0.1:${port}`,
      auth: {
        username,
        password,
      },
      httpsAgent: new https.Agent({ ca: Cert }),
      paramsSerializer: function (params) {
        const seralizedParams: string[] = [];

        for (const [key, param] of Object.entries(params)) {
          if (param.length) {
            seralizedParams.push(`${key}=[${param.join(",")}]`);
          } else seralizedParams.push(`${key}=${param}`);
        }

        return seralizedParams.join("&");
      },
    });
  }

  stop() {
    this.ws.close();
    this.ws.terminate();
  }

  async call<Path extends Paths, Method extends MethodsOf<Path>, Info extends InfoOf<Path, Method>>(
    path: Path,
    method: Method,
    parameters?: PropertyOf<Info, "parameters"> & { [key: string]: any },
    body?: PropertyOf<Info, "requestBody">
  ): Promise<PropertyOf<Info, "responce"> | undefined> {
    try {
      let Path: string = path;
      const Headers: {
        JWT?: string;
        "if-none-match"?: string;
      } = {};
      const Parameters: { [key: string]: any } = {};

      if (parameters) {
        const params = new Set(Object.keys(parameters));

        for (const param of params) {
          if (param === "JWT" || param === "if-none-match") Headers[param] = parameters[param];
          else if (path.includes(`{${param}}`))
            Path = path.replace(`{${param}}`, parameters[param]);
          else {
            Parameters[param] = parameters[param];
          }
        }
      }

      const res = await this.request({
        url: Path,
        method: method as string,
        params: Parameters,
        headers: Headers,
        data: body,
      });

      return res.data;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }

  subscribe<LCUEvent extends Events>(event: LCUEvent, cb: (data: EventMap[LCUEvent]) => void) {
    super.addListener(event, cb);
    this.send(MESSAGE_TYPES.SUBSCRIBE, event);
  }

  unsubscribe(topic: Events, callback: (data: EventMap[Events]) => void) {
    super.removeListener(topic, callback);
    this.send(MESSAGE_TYPES.UNSUBSCRIBE, topic);
  }

  private send(type: MESSAGE_TYPES, message: string) {
    this.ws.send(JSON.stringify([type, message]));
  }
}

function handleWSMessage(this: RiotWSInterface, message: WebSocket.RawData) {
  const data: WAMPMessage.Welcome | WAMPMessage.Other | WAMPMessage.Event = JSON.parse(
    message.toString("utf-8")
  );

  switch (data[0]) {
    case MESSAGE_TYPES.WELCOME:
      const [, session, idk, protocol] = data;
      this.emit("ready", this);
      break;
    case MESSAGE_TYPES.EVENT:
      const [, event, payload] = data;
      const { eventType } = payload;
      if (eventType === "Update") this.emit(event, payload.data);
      break;
    default:
      console.error("Unknown type: ", data);
      break;
  }
}

// const a = new RiotWSInterface();
// a.call("/lol-summoner/v1/current-summoner/icon", "put", undefined, {
//   inventoryToken: "rer",
//   profileIconId: 1
// })
