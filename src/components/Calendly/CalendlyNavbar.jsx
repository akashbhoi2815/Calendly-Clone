import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillLockFill, BsLink45Deg, BsBoxArrowUpRight } from "react-icons/bs";
import { AiTwotoneCalendar, AiOutlineAppstore } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { ImCreditCard } from "react-icons/im";
import { MdOutlineKeyboardArrowDown, MdOutlineLiveHelp } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { MdPeople } from "react-icons/md";
import Calendlylogo from "../../Pages/Teams/Teampage_Image/Calendly_logo.jpg";

const CalendlyNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        background={useColorModeValue("white", "red.900")}
        px={46}
        mx={"5rem"}
        marginBottom={"5px"}
      >
        <Flex
          borderBottom="2px solid whiteSmoke"
          h={20}
          w={["90%", "85%", "80%"]}
          py={4}
          maxW={"container.lg"}
          mx={"auto"}
          marginTop={"5px"}
          justifyContent={"space-between"}
        >
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/calendly_homepage">
                <Image
                  boxSize={"40px"}
                  w={"100%"}
                  h={"40px"}
                  src={Calendlylogo}
                />
              </Link>
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack as={"nav"} marginLeft={"20rem"} spacing={8}>
              <Link to="/calendlyhomepage" textDecoration={"none"}>
                <Button
                  variant={"link"}
                  fontSize={"16px"}
                  textDecoration={"none"}
                >
                  Home
                </Button>
              </Link>

              <Link to={"#"} textDecoration={"none"}>
                <Button
                  variant={"link"}
                  fontSize={"16px"}
                  textDecoration={"none"}
                >
                  Availability
                </Button>
              </Link>

              <Link to={"#"} textDecoration={"none"}>
                <Button
                  variant={"link"}
                  fontSize={"16px"}
                  textDecoration={"none"}
                >
                  Integration
                </Button>
              </Link>

              <Button variant={"link"} rightIcon={<ChevronDownIcon />}>
                <Menu>
                  <MenuButton>Help</MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Box mr={4}>
                        <BsBoxArrowUpRight />
                      </Box>
                      Help Cneter
                    </MenuItem>

                    <MenuItem>
                      <Box mr={4}>
                        <MdOutlineLiveHelp />
                      </Box>
                      Chat With Us
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Button>
            </HStack>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Flex marginLeft={8}>
                  <Avatar size={"sm"} src={""} />
                  <Box marginLeft={4} marginTop={2}>
                    <Button
                      variant={"link"}
                      bg={"none"}
                      rightIcon={<MdOutlineKeyboardArrowDown />}
                    >
                      Account
                    </Button>
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  {" "}
                  <Box marginRight={4}>
                    {" "}
                    <FaUserAlt size={14} />{" "}
                  </Box>{" "}
                 <Link to='/profile'>
                 <button> Account Settings</button>
                 </Link>
                </MenuItem>
                <MenuItem>
                  <Box marginRight={4}>
                    <ImCreditCard size={15} />
                  </Box>
                  Billing
                </MenuItem>
                <MenuItem>
                  <Box marginRight={3}>
                    <AiTwotoneCalendar size={18} />
                  </Box>
                  Calender Connections
                </MenuItem>
                <MenuItem>
                  <Box marginRight={3}>
                    <MdPeople size={18} />
                  </Box>
                  Admin Management
                </MenuItem>
                <MenuItem>
                  <Box marginRight={3}>
                    <BsFillLockFill size={18} />
                  </Box>
                  Organisation Settings
                </MenuItem>
                <MenuItem>
                  <Box marginRight={3}>
                    <BsLink45Deg size={18} />
                  </Box>
                  Share Your Link
                </MenuItem>

                <MenuItem>
                  <Box marginRight={3}>
                    <AiOutlineAppstore size={18} />
                  </Box>
                  Apps
                </MenuItem>

                <MenuDivider />
                <MenuItem
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <Box marginRight={3}>
                    <IoIosLogOut size={18} />
                  </Box>
                  <button> LogOut</button>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default CalendlyNavbar;
