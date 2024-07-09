import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { SubscriberService } from "../services/subscriber.service";
import { RootState } from "@store/store";
import { emptySubscriber, ISubscriber } from "@model/subscriber.model";
import {
  addSubscriberSuccess,
  deleteSubscriber,
  editSubscriberSuccess,
  fetchSubscribersAsync,
  setActiveSubscriber,
} from "@store/slice/subscriber.slice";
const useSubscriber = () => {
  const subscribers = useSelector<RootState, ISubscriber[]>(
    (state) => state.subscriber.subscribers
  );
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.subscriber.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.subscriber.initialFetch
  );
  const subscriber = useSelector<RootState, ISubscriber>(
    (state) => state.subscriber.subscriber
  );

  const dispatch = useDispatch();

  const loadSubscribers = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchSubscribersAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addSubscriber = async (subscriber: ISubscriber) => {
    return await SubscriberService.create(subscriber)
      .then((subscriberResponse) => {
        dispatch(addSubscriberSuccess(subscriberResponse.data));
        return true;
      })
      .catch((error) => {
        // setformError(error)
        return false;
      });
  };

  const setSubscriber = (subscriber: ISubscriber) => {
    dispatch(setActiveSubscriber(subscriber));
  };

  const getSubscriber = (subscriberId: string) => {
    const subscriber = subscribers.find((p) => p.id === subscriberId);
    if (!subscriber) {
      return emptySubscriber;
    }
    return subscriber;
  };

  const editSubscriber = async (subscriber: ISubscriber) => {
    return await SubscriberService.update(subscriber)
      .then((subscriberResponse) => {
        dispatch(editSubscriberSuccess(subscriberResponse.data));
        setSubscriber(subscriberResponse.data);
        return true;
      })
      .catch((error) => {
        // setformError(error)
        return false;
      });
  };

  const delSubscriber = async (subscriber: ISubscriber) => {
    return await SubscriberService.delete(subscriber)
      .then((resp) => {
        console.log("resp: ", resp);
        dispatch(deleteSubscriber(subscriber));
        return true;
      })
      .catch((error) => {
        console.log("error: ", error);
        return false;
      });
  };

  useEffect(() => {
    // loadSubscribers();
  }, [subscriber, subscribers, isLoading, initialFetch]);

  return {
    subscriber,
    subscribers,
    isLoading,
    initialFetch,
    addSubscriber,
    editSubscriber,
    setSubscriber,
    getSubscriber,
    delSubscriber,
  };
};

export { useSubscriber };
