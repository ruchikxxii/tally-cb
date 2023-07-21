import React, { useState, useEffect } from "react";

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Sphinx of black quartz, judge my vow.",
  "Pack my box with five dozen liquor jugs.",
  // Add more sentences as needed
];

const TypingTest = () => {
  const [currentSentence, setCurrentSentence] = useState(0);
  const [userInput, setUserInput] = useState("");
  const sentence = sentences[currentSentence];

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
  };

  useEffect(() => {
    const sentenceLength = sentence.length;
    const userInputLength = userInput.length;

    if (userInputLength === sentenceLength) {
      // All characters have been typed for this sentence
      // Move to the next sentence
      setCurrentSentence((prev) => prev + 1);
      // Clear the user input for the next sentence
      setUserInput("");
    }
  }, [userInput, sentence]);
  useEffect(() => {});
  return (
    <div className="container mx-auto p-4 bg-white">
      <div className=" h-10 w-16 overflow-hidden border-2 border-red-500">
        <p className=" -translate-x-4 text-2xl">wdhwidhoiwhdiwqd</p>
      </div>
    </div>
  );
};

export default TypingTest;
