import WebSocket from "ws";
import EventEmitter from "node:events";
import { AllEvents, AllEventMap } from "./types/Events";
import LCU_Listener, { MESSAGE_TYPES, WAMPMessage } from "./types/Listener";
import Cert from "./types/Cert";

import { exec } from "node:child_process";

interface Creds {
  port: number;
  password: string;
}

export async function getWebSocketInterface() {
  const creds = await new Promise((resolve: (arg0: Creds) => void, reject) => {
    exec(
      `Get-CimInstance -Query "SELECT * from Win32_Process WHERE name LIKE 'LeagueClientUx.exe'" | Select-Object CommandLine | fl`,
      { shell: "powershell.exe" },
      (err, commandLine, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        const portRegex = /--app-port=([0-9]+)/;
        const passwordRegex = /--remoting-auth-token=(.+?)(?= *"| --)/;

        const [, port] = commandLine.match(portRegex)!;
        const [, password] = commandLine.match(passwordRegex)!;
        resolve({
          port: Number(port),
          password,
        });
      }
    );
  });

  return new RiotWSInterface(creds);
}

export class RiotWSInterface extends EventEmitter implements LCU_Listener {
  ws: WebSocket;

  constructor({ port, password }: Creds) {
    super();

    const wsConnection = `wss://riot:${password}@127.0.0.1:${port}/`;
    this.ws = new WebSocket(wsConnection, "wamp", {
      ca: Cert,
    });
    this.ws.on("open", () => {});
    this.ws.on("message", handleWSMessage.bind(this));
  }

  close() {
    this.ws.close();
  }

  terminate() {
    this.ws.terminate();
  }

  subscribe<LCUEvent extends AllEvents>(
    event: LCUEvent,
    cb: (data: AllEventMap[LCUEvent]["returnType"]) => void
  ) {
    super.addListener(event, cb);
    this.send(MESSAGE_TYPES.SUBSCRIBE, event);
  }

  unsubscribe(topic: AllEvents, callback: (data: AllEventMap[AllEvents]["returnType"]) => void) {
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
      this.emit("ready");
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
