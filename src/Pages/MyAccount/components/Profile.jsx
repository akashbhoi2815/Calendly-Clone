import React from 'react'
import {Box,Stack,HStack,Text,Input, Textarea, Select, color} from "@chakra-ui/react";
import {QuestionOutlineIcon} from "@chakra-ui/icons";
import { languages } from './languageData';
export const Profile = () => {
  
  
  return (
   <Box marginBottom="3%">
      
          <form>
          <Stack spacing={8}>
              <Box>
                  <HStack spacing={8}>
                      <img width="100px" style={{borderRadius:"50px"}} src="https://assets.calendly.com/packs/frontend/media/placeholder-ea493df6fe8d166856b3.png" alt="" />
                       <Box>
                        <Input type="" border="1px solid blue" borderRadius="50px" color="blue" width="150px"padding="5px" placeholder="Upload Picture" textAlign="center" />
                        <Text mt={3} fontSize="sm">JPG, GIF or PNG. Max size of 5MB.</Text>
                       </Box>
                  </HStack>  
              </Box> 
              <Box>
                 <HStack>
                   <label >Name</label>
                   <QuestionOutlineIcon/>
                 </HStack>
                 <Input mt={2} width="350px" placeContent="username"/>  
              </Box>   
              <Box>
                <HStack>
                <label >Welcome Message</label>
                   <QuestionOutlineIcon/>
                </HStack>
                <Textarea mt={2} width="350px" height="150px" placeholder='Welcome to my scheduling page.Please follow the instructions to add an event to my calendar'/>
              </Box> 
              <Box>
                <label >Language</label>
                <Select mt={2} width="350px">
                  {languages?.map((item)=>{
                    return <option>{item.country}</option>
                  })}
                </Select>
               </Box> 
               <Box>
                  <HStack spacing={3}>
                    <Box width="170px">
                      <label>Date Format</label>
                      <Input mt={2} type="" placeholder='date'/>
                    </Box>
                    <Box width="170px">
                      <label>Time Format</label>
                      <Input mt={2} type="" placeholder='time'/>
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
                      <button style={{background:"blue",color:"white",padding:'10px',width:"150px",borderRadius:"50px"}}>Save Changes</button>
                      <button style={{border:"1px solid grey",padding:"10px",width:"80px",borderRadius:"50px"}}>Cancel</button>
                    </HStack>
                  </Box>
                  <Box>
                  <button style={{background:"crimson",width:"150px",padding:'10px',borderRadius:"50px",color:"white"}}>Delete Account</button>
                  </Box>
                </HStack>
                </Box>   
              </Stack>
          </form>
      
   </Box>
  )
}
