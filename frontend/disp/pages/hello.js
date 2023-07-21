import { useEffect, useState } from "react";

export default function TypingTest() {
  const [text, setText] = useState("hey how are you doing");
  const [input, setInput] = useState("");
  const [isStart, setIsStart] = useState(false);
  const [totalWords, setTotalWords] = useState(text.split(" ").length);
  const [correctWords, setCorrectWords] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true);
  const [index, setIndex] = useState(0);
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
      }
    }
    // console.log(input, isCorrect, correctWords);
  }
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [isStart, input]);

  return (
    <div className="flex flex-col items-center bg-black text-white gap-7 mt-28">
      <div className="overflow-hidden">
        <p
          id="me"
          className="font-mono transition-all"
          style={{ transform: `translateX(-${input.length * 1}ch)` }}
        >
          {text}
        </p>

        <div className="w-5 px-1 border-2 border-white animate-custom-pulse"></div>
      </div>
      <div className="flex flex-col mt-6">
        {isStart == false && (
          <p className="text-3xl text-white font-mono animate-pulse">
            Please press Spacebar to start
          </p>
        )}
        <p className="text-2xl text-white font-mono">
          Time Remaining:{" "}
          <span className="font-bold">
            {correctWords}/{totalWords} correct words
          </span>
        </p>
        <p className="text-2xl text-white font-mono">
          Current Progress:{" "}
          <span className="font-bold">
            {correctWords}/{totalWords} correct words
          </span>
        </p>
        <p className="text-2xl text-white font-mono">
          Words Per Minute: <span className="font-bold"> 25</span>
        </p>
      </div>
    </div>
  );
}
