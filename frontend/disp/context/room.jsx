import { createContext,useState} from "react";

export const [inRoom,setInRoom]=useState(false);
export const [timer,setTimer]=useState(0);
export const [username,setUsername]=useState("");
export const [speed,setSpeed]=useState(0);
export const [roomName,setRoomName]=useState("");
export const GameContext=createContext();
