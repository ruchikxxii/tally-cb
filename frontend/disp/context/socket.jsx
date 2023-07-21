import { io } from "socket.io-client";
import { createContext } from "react";
const url="";

export const socket=io(url);
export const SocketContext=createContext();
