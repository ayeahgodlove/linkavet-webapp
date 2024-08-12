import { API_URL } from "@constants/api-url";
import io, { Socket } from "socket.io-client";
import { useEffect, useRef } from "react";

export const socket = io(API_URL); // Adjust the URL if necessary

// hooks/useSocket.ts

const useSocket = (url: string) => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(url);

    return () => {
      socketRef.current?.disconnect();
    };
  }, [url]);

  const on = (eventName: string, callback: (data: any) => void) => {
    socketRef.current?.on(eventName, callback);
  };
  

  const emit = (eventName: string, data: any) => {
    socketRef.current?.emit(eventName, data);
  };

  const off = (eventName: string) => {
    socketRef.current?.off(eventName);
  };
  return { on, emit, off };
};

export default useSocket;
