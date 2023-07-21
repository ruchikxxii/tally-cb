import { React } from "react";
import Navbar from "./navbar";
import { SocketContext, socket } from "@/context/socket";
import {
  GameContext,
  inRoom,
  setInRoom,
  timer,
  setTimer,
  username,
  setUsername,
  speed,
  setSpeed,
  roomName,
  setRoomName,
} from "@/context/room";
export default function Layout({ children }) {
  return (
    <>
      <SocketContext.Provider value={socket}>
        <GameContext.Provider
          value={{
            RoomName: [roomName, setRoomName],
            RoomStatus: [inRoom, setInRoom],
            User:[username,setUsername],
            time:[timer,setTimer],
            speedLevel:[speed,setSpeed],
          }}
        >
          {/* <Navbar/> */}
          {children}
        </GameContext.Provider>
      </SocketContext.Provider>
    </>
  );
}
