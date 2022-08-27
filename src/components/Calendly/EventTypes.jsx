import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiSettings2Fill } from "react-icons/ri";
import { BiLink, BiCodeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { useSelector } from "react-redux";

const EventTypes = () => {
  const currentUser =  useSelector((store)=>store.authReducer.currentUser)
  return (
    <Box mx={"18rem"} >
      <InputGroup  mb={'23px'} >
        <InputLeftElement 
         pb={'13px'}
          pointerEvents="none"
          children={<AiOutlineSearch  mb={'23px'} color="gray.300" />}
        />
        <Input variant="unstyled" placeholder="Filter" />
      </InputGroup>

      <Flex justifyContent={"space-between"}>
        <Flex gap={10}>
          <Avatar size={'sm'} />
          <Text>{currentUser !==null ? `${currentUser.displayName}` : ""}</Text>
          
        </Flex>
        <Flex>
        <Link to='/add_event'>
          <Button w={'180px'} color={"blue.500"} rounded={"full"} borderColor={'blue.500'} variant={"outline"}  fontSize={'14px'}>
            + New Event Type
          </Button>
          </Link>
          <Menu>
            <MenuButton as={Button} border={'none'} variant={'ghost'}  size={'sm'}>
              <RiSettings2Fill/>
            </MenuButton>
            <MenuList>
              <MenuItem>
              <Box  mr={2}><BiLink/></Box>
              Copy Link</MenuItem>
              <MenuItem>
              <Box mr={2} >
                <BiCodeAlt/>
              </Box>
              Add to Website</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <hr style={{marginTop:"10px"}} />
      <Grid templateColumns='repeat(3, 1fr)'gap={8}>
        <EventCard/>
      </Grid>

    </Box>
  );
};

export default EventTypes;
