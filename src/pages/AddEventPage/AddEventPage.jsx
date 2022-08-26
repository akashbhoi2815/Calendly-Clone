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
                    <Menu >
                        <MenuButton width="400px" as={Button} rightIcon={<ChevronDownIcon/>}>Add a location</MenuButton>
                        <MenuList width="400px" height="250px" overflowY="scroll">
                            <MenuItem>
                             <HStack>
                                <Box width="40px"><img width="100%" src='https://static.vecteezy.com/system/resources/previews/000/366/004/original/location-vector-icon.jpg'/></Box>
                                <Box>
                                    <Heading size="sm" fontWeight="semi-bold">In-person-meeting</Heading>
                                    <Text color="grey" fontSize="sm">Set an address or place</Text>
                                </Box>
                             </HStack>
                            </MenuItem>
                            <MenuItem>
                             <HStack>
                               <Box width="40px"> <img width="100%" src='https://www.pngitem.com/pimgs/m/156-1568270_blue-phone-icon-png-clipart-png-download-transparent.png'/></Box>
                                <Box>
                                    <Heading size="sm" fontWeight="semi-bold">Phone call</Heading>
                                    <Text color="grey" fontSize="sm">inbound or outbound calls</Text>
                                </Box>
                             </HStack>
                            </MenuItem>
                            <MenuItem>
                             <HStack>
                             <Box width="40px"> <img width="80%" src='https://assets.calendly.com/packs/frontend/media/google-meet-fe6527ea0e4bd6fb57ad.svg'/></Box>
                                <Box>
                                    <Heading size="sm" fontWeight="semi-bold">Google meet</Heading>
                                    <Text color="grey" fontSize="sm">Web conference</Text>
                                </Box>
                             </HStack>
                            </MenuItem>
                            <MenuItem>
                             <HStack>
                             <Box width="40px"> <img width="80%" src='https://assets.calendly.com/packs/frontend/media/zoom-dd4ce5bef905d2b74c0a.svg'/></Box>
                                <Box>
                                    <Heading size="sm" fontWeight="semi-bold">Zoom</Heading>
                                    <Text color="grey" fontSize="sm">Web conference</Text>
                                </Box>
                             </HStack>
                            </MenuItem>
                            <MenuItem>
                             <HStack>
                             <Box width="40px"> <img width="80%" src='https://assets.calendly.com/packs/frontend/media/ms-teams-e0858e32c5245a478456.svg'/></Box>
                                <Box>
                                    <Heading size="sm" fontWeight="semi-bold">Microsoft Teams</Heading>
                                    <Text color="grey" fontSize="sm">Web conference</Text>
                                </Box>
                             </HStack>
                            </MenuItem>
                            <MenuItem>
                             <HStack>
                             <Box width="40px"> <img width="80%" src='https://assets.calendly.com/packs/frontend/media/webex-06679da3bace64c4b1d4.svg'/></Box>
                                <Box>
                                    <Heading size="sm" fontWeight="semi-bold">Webex</Heading>
                                    <Text color="grey" fontSize="sm">Web conference</Text>
                                </Box>
                             </HStack>
                            </MenuItem>
                            <MenuItem>
                             <HStack>
                             <Box width="40px"> <img width="80%" src='https://assets.calendly.com/packs/frontend/media/gotomeeting-58f03523b2e7fe24bfcd.svg'/></Box>
                                <Box>
                                    <Heading size="sm" fontWeight="semi-bold">GoTo Meeting</Heading>
                                    <Text color="grey" fontSize="sm">Web conference</Text>
                                </Box>
                             </HStack>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <HStack mb={2}>
                      <label>Description/Instructions</label>
                      <InfoOutlineIcon/>
                    </HStack>
                    <Textarea width="400px" height="200px"
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
