import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const ConfirmPage = () => {
    const currentUser = useSelector((store)=>store.authReducer.currentUser)
    
  return (
    <Box width="50%" p={"20"} m="150px auto" align="center" boxShadow={"dark-lg"}>
      <Box>
        <Heading size="md">Confirmed</Heading>
        <Text>You are scheduled with {currentUser.displayName}</Text>
      </Box>
     
      <Box  width={"60%"}>
      <hr />
      <Box p={"3"}>
        <HStack>
          <Text fontWeight="semibold">project meeting</Text>
        </HStack>
        <HStack>
          <CalendarIcon />
          <Text>10:30am - 11:15am,</Text>
          {/* <Text>Date</Text> */}
        </HStack>
        <HStack>
          <i class="fa-solid fa-earth-asia"></i>
          <Text>India Standard Time</Text>
        </HStack>
        <HStack>
          <i class="fa-solid fa-video"></i>
          <Text>Web conferencing details to follow.</Text>
        </HStack>
        
        </Box><hr />
      </Box>
      <Box>
        <Text fontWeight="semibold">
          A calendar invitation has been sent to your email address.
        </Text>
      </Box>
    </Box>
  );
};
