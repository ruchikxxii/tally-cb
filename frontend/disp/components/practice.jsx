import { useState, useEffect } from "react";

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

  const currentSentence = sentences[currentSentenceIndex];

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const getCharacterColor = (char, userChar) => {
    if (!userChar) return "";
    return char === userChar ? "text-green-500" : "text-red-500";
  };

  return (
    <div className=" flex items-center justify-center text-black">
      <div className="p-4 rounded-lg shadow-md">
        <p className="text-xl font-semibold mb-4">
          {currentSentence.split("").map((char, index) => (
            <span
              key={index}
              className={getCharacterColor(char, userInput[index])}
            >
              {char}
            </span>
          ))}
        </p>

        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          className=" text-black px-2 py-1 border border-gray-300 rounded-md w-full focus:ring focus:ring-blue-300"
        />
      </div>
    </div>
  );
}
