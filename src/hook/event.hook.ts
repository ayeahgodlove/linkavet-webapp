import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@store/store";
import { emptyEvent, IEvent } from "@model/event.model";
import {
  addEventSuccess,
  deleteEventThunk,
  editEventSuccess,
  fetchEvents,
  setActiveEvent,
  updateAllFilters,
} from "@store/slice/event.slice";
import { EventService } from "@services/event.service";

const useEvent = () => {
  const events = useSelector<RootState, IEvent[]>(
    (state) => state.event.events
  );
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.event.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.event.initialFetch
  );
  const selectedEvent = useSelector<RootState, IEvent>(
    (state) => state.event.selectedEvent
  );

  const dispatch = useDispatch();

  const fetchEvent = async () => {
    dispatch(fetchEvents() as any);
  };
  // const addEvent = async (event: IEvent) => {
  //   dispatch(addEventThunk(event) as any);
  // };

  const addEvent = async (event: IEvent) => {
    return await EventService.create(event)
      .then((eventResponse) => {
        dispatch(addEventSuccess(eventResponse.data));
        return true;
      })
      .catch((error) => {
        // setformError(error);
        return false;
      });
  };

  const updateEvent = async (event: IEvent) => {
    return await EventService.update(event)
      .then((eventResponse) => {
        dispatch(editEventSuccess(eventResponse.data));
        setEvent(eventResponse.data);
        return true;
      })
      .catch((error) => {
        // setformError(error);
        return false;
      });
  };
  // const updateEvent = async (event: IEvent) => {
  //   dispatch(updateEventThunk(event) as any);
  // };

  const removeEvent = async (event: IEvent) => {
    dispatch(deleteEventThunk(event) as any);
  };

  const updateAllFiltersAction = async (checked: boolean) => {
    dispatch(updateAllFilters(checked));
  };

  const setEvent = (event: IEvent) => {
    dispatch(setActiveEvent(event));
  };

  const getEvent = (eventId: string) => {
    const event = events.find((p) => p.id === eventId);
    if (!event) {
      return emptyEvent;
    }
    return event;
  };

  useEffect(() => {
    // loadEvents();
  }, [selectedEvent, events, isLoading, initialFetch]);

  return {
    selectedEvent,
    events,
    isLoading,
    initialFetch,
    setEvent,
    getEvent,
    updateAllFiltersAction,
    addEvent,
    updateEvent,
    fetchEvent,
    removeEvent
  };
};

export { useEvent };
