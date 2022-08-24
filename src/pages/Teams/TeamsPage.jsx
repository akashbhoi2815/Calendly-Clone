import React from "react";
import { Box } from "@chakra-ui/react";
import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
export const TeamsPage = () => {
  return (
    <Box margin={"auto"} justify={"center"}>
      <Stack
        minH={"80vh"}
        width={"90%"}
        marginBottom={"40px"}
        marginLeft={"60px"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Text as={"span"} color={"blue.400"}>
              CALENDLY FOR TEAMS
            </Text>
            <br />{" "}
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text color={"#0b3558"} as={"Heading"}>
                Smarter scheduling for teams
              </Text>{" "}
            </Heading>
            <Text
              fontSize={{ base: "lg", lg: "2xl" }}
              width={"85%"}
              color={"gray.500"}
            >
              Whether your team’s performance is measured by sales revenue,
              recruiting pipeline, or customer retention, scheduling automation
              enables your team to hit goals faster.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                width={"170px"}
                height={"60px"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Start for free
              </Button>
              <Button
                rounded={"full"}
                border={"2px solid black"}
                bg={"white"}
                width={"170px"}
                height={"60px"}
                _hover={{
                  borderColor: "blue.500",
                  color: "blue.500",
                }}
              >
                Contact Sales
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1366&h=1108&q=50&fm=webp"
            }
          />
        </Flex>
      </Stack>
    
    </Box>
  );
};
