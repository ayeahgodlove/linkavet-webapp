import { IBaseState } from "./base-state.model";
import { IResponseBase } from "./response-base.model";

export interface IEvent {
  id: string;
  userId: string;
  url: string;
  title: string;
  start: Date;
  end: Date;
  description: string;
}

export const emptyEvent: IEvent = {
  id: "",
  userId: "",
  title: "",
  start: new Date(),
  end: new Date(),
  description: "",
  url: "",
};

export interface IEventState extends IBaseState {
  readonly events: IEvent[];
  readonly selectedEvent: IEvent;
  readonly selectedCalendars: string[];
}

export interface IEventResponses extends IResponseBase {
  data: IEvent[];
}
export interface IEventResponse extends IResponseBase {
  data: IEvent;
}
