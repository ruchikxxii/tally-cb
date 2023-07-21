import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
function PracticeDetails() {
  const [name, setName] = useState("");
  const [time, setTime] = useState(1);
  const [speed, setSpeed] = useState(1);
  const router = useRouter();
  const handleSubmit = () => {
    // Handle form submission here
    console.log("Name:", name);
    console.log("Time:", time);
    console.log("Speed:", speed);
    router.push("/practice_mode");
  };

  return (
    <ChakraProvider>
      <Box
        p={4}
        // borderWidth={1}
        // borderRadius="lg"
        boxShadow="lg"
        className="text-slate-100 w-1/2 flex flex-col gap-6 mt-10"
      >
        <FormControl className="flex flex-col gap-1">
          <FormLabel fontSize="2xl" htmlFor="name">
            Name
          </FormLabel>
          <Input
            w="50%"
            fontSize="2xl"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4} className="flex flex-col gap-1">
          <FormLabel htmlFor="time" fontSize="2xl">
            Time
          </FormLabel>
          <RadioGroup
            id="time"
            value={time}
            size="lg"
            onChange={(e) => setTime(e)}
          >
            <Stack direction="row" spacing={6}>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl mt={4} className="flex flex-col gap-1">
          <FormLabel htmlFor="speed" fontSize="2xl">
            Speed
          </FormLabel>
          <RadioGroup
            id="speed"
            value={speed}
            size="lg"
            onChange={(e) => setSpeed(e)}
          >
            <Stack direction="row" spacing={6}>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <Button
          colorScheme="teal"
          size="lg"
          variant="solid"
          onClick={handleSubmit}
          disabled={!name || !time || !speed}
          mt={4}
          w={32}
        >
          Start
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default PracticeDetails;
