import { io } from "socket.io-client";
import { createContext } from "react";
const url="http://localhost:5000";
export const socket=io("http://localhost:5000",{
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    },
    transports:['websocket'],
    upgrade:false
});
export const SocketContext=createContext();
