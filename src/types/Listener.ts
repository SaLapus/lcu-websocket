import * as LCU_Type from "./Types";
import { AllEvents, AllEventMap } from "./Events";

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

export interface EventData<LCUEvent extends AllEvents = "OnJsonApiEvent"> {
  Create: {
    data: boolean;
    eventType: "Create";
    uri: AllEventMap[LCUEvent]["uri"];
  };

  Delete: {
    data: boolean;
    eventType: "Delete";
    uri: AllEventMap[LCUEvent]["uri"];
  };

  Update: {
    data: object;
    eventType: "Update";
    uri: AllEventMap[LCUEvent]["uri"];
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
    event: AllEvents,
    data: any
  ];
  export type Event<LCUEvent extends AllEvents = "OnJsonApiEvent"> = [
    type: MESSAGE_TYPES.EVENT,
    event: LCUEvent,
    data: EventData<LCUEvent>[keyof EventData<LCUEvent>]
  ];
}

export default interface LCU_Listener {
  on(event: "connect", cb: () => void): this;

  subscribe<LCUEvent extends AllEvents = "OnJsonApiEvent">(
    event: LCUEvent,
    cb: (data: AllEventMap[LCUEvent]["returnType"]) => void
  ): void;
}
