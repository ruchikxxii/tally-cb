import { useContext, useEffect, useState } from "react";
import { gameContext } from "@/context/room";
import { socket, SocketContext } from "@/context/socket";
import { Box,Flex } from "@chakra-ui/react";
export default function TypingTest() {
  const { question, timer, roomName } = useContext(gameContext);
  const text = question.trim();
  const [input, setInput] = useState("");
  const [isStart, setIsStart] = useState(false);
  const [totalWords, setTotalWords] = useState(text.split(" ").length);
  const [correctWords, setCorrectWords] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true);
  const [index, setIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(timer * 60);
  function onTimeUp() {
    console.log("over");
  }
  function handleUserKeyPress(e) {
    if (!isStart) {
      if (e.keyCode == 32) {
        setIsStart(true);
      }
    } else {
      if (index >= text.length) return;
      if (
        (e.keyCode >= 48 && e.keyCode <= 90) ||
        e.keyCode == 32 ||
        e.keyCode == 190 ||
        e.keyCode == 188
      ) {
        setInput((curr) => {
          if (e.key != text[index]) setIsCorrect(false);
          console.log(e.key, text[index]);
          return curr + e.key;
        });

        if (e.keyCode == 32 || index == text.length - 1) {
          if (isCorrect) {
            setCorrectWords((curr) => curr + 1);
          }
          setIsCorrect(true);
        }
        setIndex((curr) => curr + 1);
      } else if (e.keyCode == 8) {
        setInput((curr) => {
          return curr.substring(0, curr.length - 1);
        });
        setIndex((ind) => ind - 1);
      }
    }
    console.log(input);
  }
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [isStart, input]);
  useEffect(()=>{
    if(isStart){
      socket.emit('start room',roomName);
    }
  },[isStart])
  useEffect(()=>{
    socket.on('start room status',(res)=>{
      console.log(res);
    })
  },[socket])
  useEffect(() => {
    console.log("rerun");
    if (isStart) {
      if (timeRemaining > 0) {
        const timerInterval = setInterval(() => {
          setTimeRemaining((prevTime) => {
            if (prevTime <= 0) return 0;
            else return prevTime - 1;
          });
        }, 1000);

        return () => clearInterval(timerInterval);
      } else {
        onTimeUp();
      }
    }
  }, [isStart]);
  return (
    <div className="flex flex-col items-center bg-black text-white gap-7 mt-28">
      <div className=" outerBox">
        <Box>
        <div
          id="me"
          className="font-mono transition-all w-fit whitespace-nowrap"
          style={{ transform: `translateX(-${input.length * 1}ch)` }}
        >
          {text}
        </div>
        </Box>

        <div className="w-5 px-1 border-2 border-white animate-custom-pulse"></div>
      </div>
      <div className="flex flex-col mt-6">
        {isStart == false && (
          <p className="text-3xl text-white font-mono animate-pulse">
            Please press Spacebar to start
          </p>
        )}
        <p className="text-2xl text-white font-mono flex flex-row items-center">
          Time Remaining
          <span>
            <img src="./timer2.gif" width="42px" />
          </span>{" "}
          <span className="font-bold">:{timeRemaining}</span>
        </p>

        <p className="text-2xl text-white font-mono">
          Current Progress:{" "}
          <span className="font-bold">
            {correctWords}/{totalWords} correct words
          </span>
        </p>
        <p className="text-2xl text-white font-mono">
          Words Per Minute:{" "}
          <span className="font-bold">
            {" "}
            {correctWords / ((60 - timeRemaining) / 60)}
          </span>
        </p>
      </div>
    </div>
  );
}
