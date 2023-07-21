import { createContext,useState} from "react";

export const gameContext=createContext(null);
export default function GameContext({children}){
 const [timer,setTimer]=useState(0);
 const [inRoom,setInRoom]=useState(false);
 const [username,setUsername]=useState("");
 const [speed,setSpeed]=useState(0);
 const [roomName,setRoomName]=useState("");
 const [question,setQuestion]=useState("");
 const [result,setResult] = useState([]);
    return (
        <gameContext.Provider value={{
            question,setQuestion,timer,setTimer,inRoom,setInRoom,username,setUsername,speed,roomName,setSpeed,setRoomName,result,setResult,
          }}>
            {children}
          </gameContext.Provider>
    );
}


