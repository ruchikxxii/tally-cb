import { useEffect, useState } from "react";

export default function TypingTest() {
  const [text, setText] = useState("hey how are you doing");
  const [input, setInput] = useState("");
  const [isStart, setIsStart] = useState(false);
  function handleUserKeyPress(e) {
    console.log(isStart);
    console.log(e.keyCode);
    if (!isStart) {
      if (e.keyCode == 32) {
        setIsStart(true);
      }
    } else {
      //game already boi here we go
      if (
        (e.keyCode >= 48 && e.keyCode <= 90) ||
        e.keyCode == 32 ||
        e.keyCode == 190 ||
        e.keyCode == 188
      ) {
        setInput((curr) => {
          return curr + e.key;
        });
      } else if (e.keyCode == 8) {
        setInput((curr) => {
          return curr.substring(0, curr.length - 1);
        });
      }
    }
    console.log(input);
  }
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-black text-white">
      <div className="text-3xl overflow-hidden">
        <p
          id="me"
          className="transition-all"
          style={{ transform: `translateX(-${input.length * 0.91}ch)` }}
        >
          {text}
        </p>
        <div className="w-4 px-1 border-2 border-white animate-custom-pulse"></div>
      </div>

      {/* <input
        className="border p-2 mt-10"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      /> */}
    </div>
  );
}
