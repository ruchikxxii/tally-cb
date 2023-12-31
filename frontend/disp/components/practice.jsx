import { useState, useEffect } from "react";
import { Input, FormControl } from "@chakra-ui/react";
import StartAnimation from "./startAnim";
export default function Practice() {
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setUserInput("");
  }, [currentSentenceIndex]);

  const [currentSentence, setCurrentSentence] = useState(
    sentences[currentSentenceIndex]
  );

  const handleChange = (e) => {
    setUserInput(e.target.value);
    // console.log(userInput);
    setCurrentSentence((curr) => {
      return curr.substring(1, curr.length);
    });
    console.log(currentSentence);
  };

  const getCharacterColor = (char, userChar) => {
    if (!userChar) return "";
    return char === userChar ? "text-green-500" : "text-red-500";
  };
  function handleKeyPress(e) {
    console.log(e);
    if (e.keyCode != 8 && e.keyCode != 16 && e.keyCode != 20) {
      setUserInput((curr) => curr + e.key);
      console.log(userInput);
    } else if (e.keyCode == 8) {
      setUserInput((curr) => {
        return curr.substring(0, curr.length - 1);
      });
    }
  }
  return (
    <div
      className=" flex items-center justify-center flex-col text-black"
      onKeyDown={handleKeyPress}
    >
      <div className="p-4 rounded-lg shadow-md">
        <p className="text-xl font-semibold mb-4 first-letter:underline ">
          {currentSentence.split("").map((char, index) => (
            <span
              key={index}
              className={getCharacterColor(char, userInput[index])}
            >
              {char}
            </span>
          ))}
        </p>
        <button>click</button>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          className="hidden text-black px-2 py-1 border border-gray-300 rounded-md w-full"
        />
      </div>
      {/* <StartAnimation
        onClick={() => {
          console.log("presses");
        }}
      /> */}
    </div>
  );
}
