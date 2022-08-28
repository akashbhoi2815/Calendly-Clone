import React from "react";
import {
  Box,
  Stack,
  HStack,
  Text,
  Input,
  Textarea,
  Select,
  color,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { languages } from "./languageData";
import { useSelector } from "react-redux";

export const Profile = () => {

  const currentUser = useSelector((store)=>store.authReducer.currentUser)

  console.log("account",currentUser)

  return (
    <Box marginBottom="3%">
      <form>
        <Stack spacing={8}>
          <Box>
            <HStack spacing={8}>
              <img
                width="100px"
                style={{ borderRadius: "50px" }}
                src="https://assets.calendly.com/packs/frontend/media/placeholder-ea493df6fe8d166856b3.png"
                alt=""
              />
              <Box>
                <Input
                  type=""
                  border="1px solid blue"
                  borderRadius="50px"
                  color="blue"
                  width="150px"
                  padding="5px"
                  placeholder="Upload Picture"
                  textAlign="center"
                />
                <Text mt={3} fontSize="sm">
                  JPG, GIF or PNG. Max size of 5MB.
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <label>Name</label>
              <QuestionOutlineIcon />
            </HStack>
            <Input mt={2} width="350px" placeContent="username" value={currentUser.displayName} />
          </Box>
          <Box>
            <HStack>
              <label>Welcome Message</label>
              <QuestionOutlineIcon />
            </HStack>
            <Textarea
              mt={2}
              width="350px"
              height="150px"
              placeholder="Welcome to my scheduling page.Please follow the instructions to add an event to my calendar"
            />
          </Box>
          <Box>
            <label>Language</label>
            <Select mt={2} width="350px">
              <option value="">English</option>
              <option value="">French</option>
              <option value="">Spanish</option>
              <option value="">German</option>
            </Select>
          </Box>
          <Box>
            <HStack spacing={3}>
              <Box width="170px">
                <label>Date Format</label>
                <Select placeholder="">
              <option value="">DD/MM/YYYY</option>
              <option value="">MM/DD/YYYY</option>
            </Select>
              </Box>
              <Box width="170px" >
              <label>Time Format</label>
              <Select placeholder="">
              <option value="">12(am/pm)</option>
              <option value="">24hr</option>
            </Select>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack gap="11%">
              <label>Time Zone</label>
              <label>Currnet Time:{}</label>
            </HStack>
            <Select mt={2} width="350px" placeholder="">
              <option value="">India</option>
            </Select>
          </Box>
          <Box>
            <HStack justifyContent="space-between">
              <Box>
                <HStack spacing={5}>
                  <button
                    style={{
                      background: "blue",
                      color: "white",
                      padding: "10px",
                      width: "150px",
                      borderRadius: "50px",
                    }}
                  >
                    Save Changes
                  </button>
                  <button
                    style={{
                      border: "1px solid grey",
                      padding: "10px",
                      width: "80px",
                      borderRadius: "50px",
                    }}
                  >
                    Cancel
                  </button>
                </HStack>
              </Box>
              <Box>
                <button
                  style={{
                    background: "crimson",
                    width: "150px",
                    padding: "10px",
                    borderRadius: "50px",
                    color: "white",
                  }}
                >
                  Delete Account
                </button>
              </Box>
            </HStack>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};
