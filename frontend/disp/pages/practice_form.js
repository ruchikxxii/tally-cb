import PracticeDetails from "@/components/practice_details";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import Image from "next/image";
import my_img from "../public/my-img.png";
export default function PracticeForm() {
  return (
    <div className="flex flex-col bg-black h-full px-10 pt-5 gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-7xl text-slate-200 font-extrabold">Welcome</h1>
        <h2 className="text-2xl text-slate-400">
          Please enter the following to get started
        </h2>
      </div>
      <div className="flex flex-row ">
        <PracticeDetails className="mt-10" />
        <Image className="basis-1/2 my-0  -mt-20" src={my_img} />
      </div>
    </div>
  );
}
