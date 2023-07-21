import { useContext, useState } from "react";
import { SocketContext } from "@/context/socket";
export default function socketFunctions(){
    const socket=useContext(SocketContext);
    let details={
        name:"name",
        room_name:"",
        speed:0,
        time:0,

    }
    const [room,setRoom]=useState(""); //will require global context
    socket.on("connection",()=>{
        console.log("connected")
    })
    // socket.emit("create room",details);
    // socket.emit("join room",details);
    // socket.emit("update progress",details)
    socket.on("room code",(room_name)=>{
        setRoom(room_name);
    })
}