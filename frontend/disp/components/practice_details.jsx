import React, { useEffect, useState } from "react";
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
import { gameContext } from "@/context/room";
import { useContext } from "react";
import { SocketContext } from "@/context/socket";
function PracticeDetails() {
  const { setUsername,setRoomName,setTimer,setSpeed,setQuestion,setPlayers } = useContext(gameContext);
  const socket = useContext(SocketContext);
  const [name, setName] = useState("");
  const [time, setTime] = useState(0);
  const [speed1, setSpeed1] = useState(0);
  const router = useRouter();
  // useEffect(() => {
  //   console.log(username);
  // }, [username]);
  const handleSubmit = () => {
    // Handle form submission here
    // console.log("Name:", name);
    // setUsername(name);
    // console.log("Time:", time);
    // console.log("Speed:", speed);
    setUsername(name);
    setTimer(time);
    setSpeed(speed1);
    setPlayers(1);
    socket.emit('create room',{
      name:name,
      time:time,
      speed:speed1,
      players:1,
    })
    socket.on('room code',(res)=>{
      console.log(res)
      setRoomName(res.room_name);
      setQuestion(res.question);
    })
    router.push("/typing_room");
  };

  return (
    <ChakraProvider>
      <Box
        p={4}
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
            isRequired
          />

          <FormLabel htmlFor="time" fontSize="2xl">
            Time
          </FormLabel>
          <RadioGroup
            id="time"
            value={time}
            size="lg"
            onChange={(e) => setTime(e)}
            isRequired
          >
            <Stack direction="row" spacing={6}>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
            </Stack>
          </RadioGroup>

          <FormLabel htmlFor="speed" fontSize="2xl">
            Speed
          </FormLabel>
          <RadioGroup
            id="speed"
            value={speed1}
            size="lg"
            onChange={(e) => setSpeed1(e)}
          >
            <Stack direction="row" spacing={6}>
              <Radio value="1">1</Radio>
              <Radio value="2">2</Radio>
              <Radio value="3">3</Radio>
            </Stack>
          </RadioGroup>

          <Button
            colorScheme="teal"
            size="lg"
            variant="solid"
            isDisabled={!name || time == 0 || speed == 0}
            onClick={handleSubmit}
            mt={4}
            w={32}
            type="submit"
          >
            Start
          </Button>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}

export default PracticeDetails;
