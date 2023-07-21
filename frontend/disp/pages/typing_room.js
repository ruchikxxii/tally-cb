import { useEffect, useState,useContext } from "react";
import { gameContext } from "@/context/room";
import LeaderboardProgressBar from "../components/leaderboard";
const players = [
  { id: 1, name: "Player 1", score: 90 },
  { id: 2, name: "Player 2", score: 70 },
  { id: 3, name: "Player 3", score: 50 },
  //to be fetched
];
export default function TypingRoom() {
  const {question}=useContext(gameContext);
  const [text, setText] = useState(question);

  const [input, setInput] = useState("");
  const [isStart, setIsStart] = useState(false);
  const [totalWords, setTotalWords] = useState(text.split(" ").length);
  const [correctWords, setCorrectWords] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true);
  const [index, setIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);
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
      <div className="overflow-hidden">
        <p
          id="me"
          className="font-mono transition-all"
          style={{ transform: `translateX(-${input.length * 1}ch)` }}
        >
          {question}
        </p>

        <div className="w-5 px-1 border-2 border-white animate-custom-pulse"></div>
      </div>
      <div>
        {isStart == false && (
          <p className="text-3xl text-white font-mono animate-pulse">
            Waiting for all players to join
          </p>
        )}
      </div>
      <div>
        <LeaderboardProgressBar players={players} />
      </div>
    </div>
  );
}
