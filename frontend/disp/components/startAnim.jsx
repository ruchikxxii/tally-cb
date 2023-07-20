import React from "react";
import { Box, Flex, Text,keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";
const animationKeyframes = keyframes`
  0% { transform: scale(1)}
  50% { transform: scale(1.2)}
  100% { transform: scale(1)}
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;
export default function StartAnimation() {
  return (
    <Box as={motion.div} borderRadius={"50%"} animation={animation}>
      <Flex
        justify={"center"}
        align={"center"}
        borderRadius={"50%"}
        _hover={{ cursor: "pointer" }}
        h={"5rem"}
        w={"5rem"}
        bgColor={"#FF9B9B"}
      >
        <Text color={"white"} fontWeight={"bold"} fontSize={"large"}>
          Begin !!
        </Text>
      </Flex>
    </Box>
  );
}
