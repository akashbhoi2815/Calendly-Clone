import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const CalendlyNav2 = () => {
  return (
    <Box px={49} my={"5rem"} mx={"15rem"} mt={'1rem'} boxShadow={'-moz-initial'}  mb={'2rem'} borderBottom={'2px solid whiteSmoke'}  >
      <Flex h={28} justifyContent="space-between" alignItems={"center"}>
        <VStack spacing={6}>
          <HStack>
            <Button
              variant={"ghost"}
              fontWeight={"semibold"}
              rightIcon={<MdOutlineKeyboardArrowDown size={20} />}
              mr={80}
            >
              <Menu>
                <MenuButton variant={"ghost"} fontWeight={"semibold"}>
                  <Heading as={"h6"} fontWeight={"normal"} fontSize={'26px'}>
                    My Calendly
                  </Heading>
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Box mr={4}>{/* <BsBoxArrowUpRight/>  */}</Box>
                    Help Center
                  </MenuItem>
                  <MenuItem>
                    {/* <Box mr={4}><MdOutlineLiveHelp/></Box> */}
                    Chat With Us
                  </MenuItem>
                </MenuList>
              </Menu>
            </Button>
          </HStack>

          <HStack
            as={"nav"}
            px={2}
            spacing={6}
            justifyContent={"space-between"}
          >
            <Link to={"#"}>
              <Button  fontSize={'14px'} variant={'link'} fontWeight={"semibold"} >
                Event Types
              </Button>
            </Link>
            <Link to={"#"}>
              <Button  fontSize={'14px'} variant={'link'} fontWeight={"semibold"}>
                Scheduled Events
              </Button>
            </Link>
            <Link to={"#"}>
              <Button  fontSize={'14px'} variant={'link'} fontWeight={"semibold"}>
                Workflows
              </Button>
            </Link>
            <Link to={"#"}>
              <Button  fontSize={'14px'} variant={'link'} fontWeight={"semibold"}>
                Routing Forms
              </Button>
            </Link>
          </HStack>
        </VStack>

        <Flex alignItems={"center"}>
            <Link to={'#'}>
            <Button
              variant={"solid"}
              bg={"#3372cc"}
              color={"white"}
              size={"sm"}
              mr={4}
              w={'140px'}
              leftIcon={<AddIcon />}
              borderRadius={50}
              >
              Create
            </Button>
              </Link>
          </Flex>
      </Flex>
    </Box>
  );
};

export default CalendlyNav2;
