// pages/results.js

import React from "react";
import { Divider } from "@chakra-ui/react";
const entries = [
  {
    name: "Player 1",
    result: { time: new Date(), words: 50 },
  },
  {
    name: "Player 2",
    result: { time: new Date(), words: 60 },
  },
  {
    name: "Player 3",
    result: { time: new Date(), words: 40 },
  },
  // Add more entries as needed
];

const Results = () => {
  const sortedEntries = entries.sort((a, b) => a.result.time - b.result.time);
  const resultEntries = sortedEntries.map((ent) => {
    return (
      <div className="flex flex-col gap-2 text-2xl font-bold">
        <div className="flex flex-row gap-8">
          <h3>{ent.name}</h3>
          <p>date lite</p>
          <p>{ent.result.words}</p>
        </div>

        <Divider orientation="horizontal" width="80%" />
      </div>
    );
  });
  return (
    <div className="my-bg h-screen flex flex-col gap-8 px-24 py-24 text-white">
      <h1 className="text-6xl font-extrabold font-mono text-white">Results</h1>
      <div className="flex flex-col gap-6">{resultEntries}</div>
    </div>
  );
};

export default Results;
