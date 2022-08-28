import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiCopy, BiNote } from "react-icons/bi";
import { MdEdit, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiDeleteBin6Fill, RiSettings2Fill } from "react-icons/ri";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLocation, useSearchParams,Link} from 'react-router-dom';
import { deleteEventData, getEventData } from "../../redux/appReducer/action";

const EventCard = () => {


  const events = useSelector((store)=>store.appReducer.events)
  

  const dispatch = useDispatch()

  // const getData = () =>{
  //   if(events.length==0){
  //     dispatch(getEventData())
  //   }
   
  // }
  
  const handleDelete = (id) =>{
    dispatch(deleteEventData(id)).then(dispatch(getEventData()))
  }
  useEffect(()=>{
    dispatch(getEventData())
    console.log("delete")
  },[dispatch])
  
  
  console.log('events: ', events);

  return (
    <>
    {
      events.length===0 ? "No Events" :
      events.map((el)=>(
        <Box
        key={el.id}
        maxW={"320px"}
        w={"400px"}
        mt={'2%'}
        boxShadow={"xl"}
        borderTop={"0.5rem solid #8046f3"}
        p={4}
        textAlign={"left"}
      >
  
      
        <Flex direction={"row"} justifyContent={"space-between"}>
          <Checkbox />
          <Menu>
            <MenuButton
              as={Button}
              variant={"ghost"}
              size={"sm"}
              border={"none"}
              rightIcon={<MdOutlineKeyboardArrowDown />}
            >
              <RiSettings2Fill />
            </MenuButton>
  
            <MenuList w={"10px"}>
              <MenuItem>
                <Box mr={2}>
                  <MdEdit />
                </Box>
                <Link to={`/editpage/${el.id}`}>Edit</Link>
              </MenuItem>
              <MenuItem>
                <Box mr={2}>
                  <BiNote />
                </Box>
                Add Internal Note
              </MenuItem>
              <MenuItem>
                <Box mr={2}>
                  <BiCopy />
                </Box>
                Clone
              </MenuItem>
              <MenuItem>
                <Box mr={2}>
                  <RiDeleteBin6Fill />
                </Box>
                <button onClick={() => handleDelete(el.id)} >Delete</button>
              </MenuItem>
              <hr />
  
              <MenuItem>
                On/Off <Switch ml={"6rem"} />
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
  
        <Box mb={4}>
          <Heading fontSize={"xl"} fontWeight={500}>
            {el.duration} Meeeting
          </Heading>
          <Text fontWeight={400} color={"gray.500"} mb={"8px"}>
          {el.duration} One-on-One
          </Text>
          <Link to={"#"} color={"blue.500"}>
            View booking page
          </Link>
          <hr/>
          <Stack direction={'row'} mt={2} spacing={4} >
          <Button flex={1} fontSize={'sm'} variant={'link'} leftIcon={<BiCopy/>} color={'blue.500'}>
   Copy Link
          </Button>
          <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              color={"blue.400"}
              variant={"outline"}
              border={"1px solid "}
              borderColor={"blue.500"}
            >
              Share
            </Button>
          </Stack>
        </Box>
      </Box>
      ))
     } 
    {/* <Box
   
      maxW={"320px"}
      w={"400px"}
      mt={'2%'}
      boxShadow={"xl"}
      borderTop={"0.5rem solid #8046f3"}
      p={4}
      textAlign={"left"}
    >

    
      <Flex direction={"row"} justifyContent={"space-between"}>
        <Checkbox />
        <Menu>
          <MenuButton
            as={Button}
            variant={"ghost"}
            size={"sm"}
            border={"none"}
            rightIcon={<MdOutlineKeyboardArrowDown />}
          >
            <RiSettings2Fill />
          </MenuButton>

          <MenuList w={"10px"}>
            <MenuItem>
              <Box mr={2}>
                <MdEdit />
              </Box>
              Edit
            </MenuItem>
            <MenuItem>
              <Box mr={2}>
                <BiNote />
              </Box>
              Add Internal Note
            </MenuItem>
            <MenuItem>
              <Box mr={2}>
                <BiCopy />
              </Box>
              Clone
            </MenuItem>
            <MenuItem>
              <Box mr={2}>
                <RiDeleteBin6Fill />
              </Box>
              <button >Delete</button>
              
            </MenuItem>
            <hr />

            <MenuItem>
              On/Off <Switch ml={"6rem"} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Box mb={4}>
        <Heading fontSize={"xl"} fontWeight={500}>
          30 Minute Meeeting
        </Heading>
        <Text fontWeight={400} color={"gray.500"} mb={"8px"}>
          30 mins, One-on-One
        </Text>
        <Link to={"#"} color={"blue.500"}>
          View booking page
        </Link>
        <hr/>
        <Stack direction={'row'} mt={2} spacing={4} >
        <Button flex={1} fontSize={'sm'} variant={'link'} leftIcon={<BiCopy/>} color={'blue.500'}>
 Copy Link
        </Button>
        <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            color={"blue.400"}
            variant={"outline"}
            border={"1px solid "}
            borderColor={"blue.500"}
          >
            Share
          </Button>
        </Stack>
      </Box>
    </Box> */}
    </>
  );
};

export default EventCard;
