import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
export default function Navbar() {
    const router=useRouter();
    function changePage(){
        router.push('/')
    }
  return (
    <Flex
      bgColor={"white"}
      w={"100vw"}
      align={"center"}
      justify={"center"}
      borderBottom={'gray solid 1px'}
    >
      <Text
        align={"center"}
        fontSize={"2xl"}
        fontWeight={"bold"}
        color={'blue.600'}
        _hover={{ cursor: "pointer" }}
        onClick={changePage}
      >
        Finger Racer
      </Text>
    </Flex>
  );
}
