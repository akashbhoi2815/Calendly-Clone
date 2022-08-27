import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import Left_section from "./Left_section/Left_section";
import Middle from "./Middle_section/Middle";
import SignUp_Section from "./Right_section/SignUp_Section";

export const SignUp = () => {
  return (
    <>
    <Box><Navbar/></Box>
    <Box mt={"100px"}>   
    <br />
     <Flex justifyContent={"center"}>
      <Box  w="600px" textAlign={"center"}>
      <Box mt={"4rem"}>
      <Left_section />
        </Box>
        
      </Box>
      <br />
      <Box  w="600px" 
       bgImage="url('https://images.ctfassets.net/k0lk9kiuza3o/59iAyVjqqMENsNFL0v6bl2/07024e4c1f4013d7cf49de86e70e16b5/Bg-Shape.svg')"
       bgRepeat="no-repeat"
       bgSize="49%"
        size="40%"
       bgPosition={"top right"}>
        <Box w="500px" >
         <SignUp_Section />
        </Box>
        
      </Box>
    </Flex>
    <Box>
      <Middle />
    </Box>
    </Box>
    <Box><Footer/></Box>
    </>
  );
};
