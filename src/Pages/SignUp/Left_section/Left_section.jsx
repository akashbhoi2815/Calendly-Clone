import React from "react";
import {
  Stack,
  Box,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  Img,
  HStack,
} from "@chakra-ui/react";
import './left.css'
const Left_section = () => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = new Date();
  let m = today.getMonth();
  let date = months[m] + " " + today.getDate() + "," + today.getFullYear();
  return (
    <Box w="43%" p="50" textAlign={"start"}>
      <Text className="webinar">WEBINAR</Text>
      <br />
      <Box>
      <Heading variant={"ghost"}>How Sales Teams</Heading>
      <Heading variant={"ghost"}>Close More Deals with </Heading>
      <Heading variant={"ghost"}>Calendly</Heading>
      </Box>
      <Box mt={"5"}>
        <Flex gap={"60px"} className="date">
          <Box>
            <Text color={"#476788"}>Date & Time</Text>
            <Text  mt={"2"}>{date} at 10:30pm</Text>
            <Text>GMT+5:30</Text>
          </Box>
          <Box>
            <Text color={"#476788"}>Webinar Length</Text>
            <Text  mt={"2"}>45 minutes</Text>
          </Box>
        </Flex>
        <br />
        <Text className="text">
          Join this webinar to learn how sales teams use Calendly to turn
          meeting scheduling into a competitive advantage.
          <br />
          <br />
          When your team is set up for scheduling success and meeting lifecycle
          automation, you can improve your prospect experience, speed up your
          sales cycle, and hit your goals. This expert panel, including Calendly
          customer and advocate, CallRail, will share how Calendly helps drive
          more revenue, meeting by meeting.
          <br />
          <br />
          In this webinar, you’ll discover new ways to:
          <br />
          <br />
          <Box ml={"20px"}>
          <ul>
            <li>
              Power outbound and inbound sales motions to enable prospects to
              book a meeting at their peak interest.
            </li>
            <li>
              Fill pipeline with high-value leads and accelerate sales velocity
              to meet goals before quarter-end.
            </li>
            <li>
              Reduce no-shows and keep prospects engaged to maintain strong deal
              momentum.
            </li>
            <li>
              Automate workflows and processes to reduce admin tasks and focus
              on selling.
            </li>
          </ul>
          </Box>
        </Text>
      </Box>
    </Box>
  );
};

export default Left_section;
