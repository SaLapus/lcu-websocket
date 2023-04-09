import EventEmitter from "node:events";

import { EventMap, Events } from "./Events";
import { Paths, MethodsOf, InfoOf, PropertyOf } from "./Request/Info";

export enum MESSAGE_TYPES {
  WELCOME = 0,
  PREFIX = 1,
  CALL = 2,
  CALLRESULT = 3,
  CALLERROR = 4,
  SUBSCRIBE = 5,
  UNSUBSCRIBE = 6,
  PUBLISH = 7,
  EVENT = 8,
}

export interface EventData<LCUEvent extends Events = "OnJsonApiEvent"> {
  Create: {
    data: boolean;
    eventType: "Create";
    uri: EventMap[LCUEvent];
  };

  Delete: {
    data: boolean;
    eventType: "Delete";
    uri: EventMap[LCUEvent];
  };

  Update: {
    data: object;
    eventType: "Update";
    uri: EventMap[LCUEvent];
  };
}

export namespace WAMPMessage {
  export type Welcome = [
    type: MESSAGE_TYPES.WELCOME,
    session: string,
    idk: number,
    protocol: string
  ];
  export type Other = [
    type: Exclude<MESSAGE_TYPES, MESSAGE_TYPES.WELCOME | MESSAGE_TYPES.EVENT>,
    event: Events,
    data: any
  ];
  export type Event<LCUEvent extends Events = "OnJsonApiEvent"> = [
    type: MESSAGE_TYPES.EVENT,
    event: LCUEvent,
    data: EventData<LCUEvent>[keyof EventData<LCUEvent>]
  ];
}

export default interface LCU_Listener extends EventEmitter {
  on(event: "connect", cb: () => void): this;

  call<Path extends Paths, Method extends MethodsOf<Path>, Info extends InfoOf<Path, Method>>(
    path: Path,
    method: Method,
    params?: PropertyOf<Info, "parameters"> & { [key: string]: any },
    body?: PropertyOf<Info, "requestBody">
  ): Promise<PropertyOf<Info, "responce"> | undefined>;

  subscribe<LCUEvent extends Events = "OnJsonApiEvent">(
    event: LCUEvent,
    cb: (data: EventMap[LCUEvent]) => void
  ): void;

  unsubscribe<LCUEvent extends Events = "OnJsonApiEvent">(
    event: LCUEvent,
    cb: (data: EventMap[LCUEvent]) => void
  ): void;
}
