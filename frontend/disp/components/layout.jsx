import {React} from "react";
import Navbar from "./navbar";
import { SocketContext,socket } from "@/context/socket";
export default function Layout({children}){
    return(
        
        <>
        <SocketContext.Provider value={socket}>
        <Navbar/>
        {children}
        </SocketContext.Provider>
        </>
    );
}