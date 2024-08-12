"use client";
import { API_URL } from "@constants/api-url";
import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const SocketContext = createContext(null);

export function SocketProvider({ children }: { children: any }) {
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const socketItem = io(`${API_URL}`);
    setSocket(socketItem);

    return () => {
      socketItem.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export function useSocket() {
  return useContext(SocketContext);
}
