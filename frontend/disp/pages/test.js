import Practice from "@/components/practice";
import React, { useState, useEffect, useContext } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import customTheme from "../theme.js";
import Multi from "@/components/multi.jsx";
const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
];

const TypingSpeedTest = () => {
  return (
    <div className="h-screen flex flex-col  justify-center  bg-white">
      {/* <div className=" basis-1/6">
        <h1 className="text-white font-bold text-lg">
          something navbar related??
        </h1>
      </div> */}
      <div className="basis-5/6 flex flex-row justify-center">
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab>Practice Mode</Tab>
            <Tab>Multi-player Mode</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Practice />
            </TabPanel>
            <TabPanel>
              <Multi />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default TypingSpeedTest;
