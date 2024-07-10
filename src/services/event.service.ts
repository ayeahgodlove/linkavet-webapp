import { IEvent, IEventResponse, IEventResponses } from "@model/event.model";
import { requestType } from "@services";

export const EventService = {
  list: (): Promise<IEventResponses> => requestType.get("/api/events"),
  create: (event: IEvent): Promise<IEventResponse> =>
    requestType.post(`/api/events`, event),
  update: (event: IEvent): Promise<IEventResponse> =>
    requestType.put(`/api/events/${event.id}`, event),
  delete: (event: IEvent): Promise<IEventResponse> =>
    requestType.del(`/api/events/${event.id}`, event),
};
