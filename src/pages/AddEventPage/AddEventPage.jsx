import { CalendarIcon, ChevronDownIcon, ChevronLeftIcon, ExternalLinkIcon, Icon, InfoOutlineIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, HStack, Input, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react';
import style from './AddEvent.module.css';

export const AddEventPage = () => {
  return (
   <Box width="70%" margin="auto" marginTop="3%">
       <Box width="60%" padding="2%" marginBottom="3%">
            <HStack justifyContent="space-between">
                <button style={{border:"1px solid #006bff", color:"#006bff",width:"100px",padding:"5px",borderRadius:"50px"}}>
                    <ChevronLeftIcon/>
                    Back
                </button>
                <Heading size="md" fontWeight="semibold">Add One-on-One Event Type</Heading>
            </HStack>
        </Box>

        <Box mb={4}>
            <HStack justifyContent="space-between">
                <Box display="flex" gap={2} alignItems="center"> 
                <Box><Text>Invitee language -</Text></Box>
                   <Box><Select variant="flushed" placeholder=''>
                      <option>English</option>
                      <option>French</option>
                      <option>Spanish</option>
                      <option>German</option>
                      <option>Dutch</option>
                      <option>Portuguese (Brazil)</option>
                      <option>Italian</option>
                      <option>Ukrainian</option>
                    </Select>
                    </Box>
                </Box>
                <Box>
                    <HStack>
                        <ExternalLinkIcon/>
                         <Text>view live page</Text>
                    </HStack>
                </Box>
            </HStack>
        </Box>

        <Box border="2px solid" rounded="md" height="auto" >
           <HStack justifyContent="space-between" padding="1%">
             <Box>
                <HStack>
                    <span style={{width:"30px",height:"30px",background:"violet",borderRadius:"50px"}}></span>
                    <Box>
                    <Heading size="sm">What event is this?</Heading>
                     <Text>No location given</Text>
                    </Box>
                </HStack>
             </Box>
             {/* <Box>
                <HStack >
                    <button style={{width:"80px",padding:'5px'}}>Cancel</button>
                    <button style={{color:"white",background:"#006bff",width:"80px",padding:'5px',borderRadius:"50px"}}>Next</button>
                </HStack>
             </Box> */}
           </HStack>
           <hr/>

           <form style={{padding:"5%"}}>
               <Stack spacing={8}>
                <Box>
                    <HStack mb={2}>
                    <label>Event name*</label>
                    <InfoOutlineIcon/>
                    </HStack>
                    <Input width="400px"/>
                </Box>
                
                <Box>
                    <HStack mb={2}>
                    <label>location</label>
                    <InfoOutlineIcon/>
                    </HStack>
                    <Select >
                        <option>In-person-meeting</option>
                        <option>Phone call</option>
                        <option>Google Meet</option>
                        <option>Zoom</option>
                        <option>Microsoft Teams</option>
                        <option>Webex</option>
                        <option>GoTo Meeting</option>
                    </Select>
                </Box>
                <Box>
                    <HStack mb={2}>
                      <label>Description/Instructions</label>
                      <InfoOutlineIcon/>
                    </HStack>
                    <Input width="400px" height="200px"
                    placeholder='Write a summary and any details your invitee should know about the event'/>       
                </Box>
                <Box>
                    <HStack mb={2}>
                        <label>Event link *</label>
                        <InfoOutlineIcon/>
                    </HStack>
                    <label>calendly.com/</label><br/>
                    <Input width="400px"/>
                </Box>
         </Stack> 

           </form>
        </Box>
   </Box>
  )
}
