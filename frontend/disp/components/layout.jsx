import { React, useContext, useEffect } from "react";
import Navbar from "./navbar";
import { SocketContext, socket } from "@/context/socket";
import GameContext from "@/context/room";
export default function Layout({ children }) {
  return (
    <>
      <SocketContext.Provider value={socket}>
        <GameContext>
          {/* <Navbar/> */}
          {children}
          </GameContext>
      </SocketContext.Provider>
    </>
  );
}
