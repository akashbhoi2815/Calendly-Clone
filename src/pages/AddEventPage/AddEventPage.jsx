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

         {/* pavan code start */}

         <div className={style.time_main}>
      {/* box1 */}
      <div className={style.time_main_box1}>
        <div className={style.time_main_box1_a}>
          <div>
            <CalendarIcon />
          </div>
          <div>
            <p>When can people book this event?</p>
            <p style={{ color: "grey", fontSize: "14px" }}>
              30 min, 60 rolling calendar days
            </p>
          </div>
        </div>
        <div>
          {/* <Button
            colorScheme="black"
            variant="link"
            marginRight="20px"
            fontWeight="0"
          >
            Cancle
          </Button>

          <button
            style={{
              borderRadius: "30px",
              color: "white",
              padding: "5px 15px",
              fontWeight: "bold",
              backgroundColor: "#006bff",
            }}
          >
            Next
          </button> */}
        </div>
      </div>

      {/* box2 */}
      <div className={style.time_main_box2}>
        <div className={style.time_main_box2_a}>
          <div>
            {" "}
            <Text  as="b">Date range</Text>
          </div>
          <div>
            <Text as="b" fontSize="xs">
              {" "}
              Invitees can schedule...
            </Text>
          </div>
          <div style={{display:"flex", justifyContent:"space-between", gap:"10px" }}>
           
            <div><input type="number" style={{outline:"none",width:"30%", border:"1px solid grey", borderRadius:"5px", padding:"7px 5px"}}/></div>
            <div><select style={{outline:"none", border:"1px solid grey", borderRadius:"5px", padding:"7px 5px", marginLeft:"-130px"}} >
              <option value="calender_days">Calender days</option>
              <option value="week-days">Week days</option>
            </select>
            </div>

            <div>
         
              <p>into the future</p>
              </div>

          </div>

          <div style={{display:"flex" , gap:"10px"}}>
          {/* <div style={{padding:"5px 0px"}}><input type="radio" style={{width:"50px", height:"50%" }}/></div> */}
          <p>Within a date range</p>
          </div>

          <div style={{display:"flex" , gap:"10px"}}>
          {/* <div style={{padding:"5px 0px"}}><input type="radio" style={{width:"50px", height:"50%" }}/></div> */}
          <p>Indefinitely into the future</p>
          </div>
        </div>
        <div className={style.time_main_box2_b}>
          <p>
Set a range of dates when you can accept <br/> meetings.</p>
        </div>
      </div>


      {/* box-3 */}

      <div className={style.time_main_box3}>
        <div className={style.time_main_box3_a}>
          <div>
            {" "}
            <Text  as="b">Duration</Text>
          </div>
         
          <div style={{display:"flex", justifyContent:"space-between", gap:"10px" }}>
            
          <div style={{width:"100%"}}><select  style={{outline:"none", border:"1px solid grey", borderRadius:"5px", padding:"7px 5px", width:"100%"}} >
              <option value="15min">15min</option>
              <option value="30min">30min</option>
              <option value="45min">45min</option>
              <option value="60min">60min</option>
              <option value="custom">Custom</option>
            </select>
            </div>
           

          </div>
        </div>
        <div className={style.time_main_box3_b}>
          <p>
          Define how long your event will be. It can be as long as 12 hours.</p>
        </div>
      </div>

      {/* box-4 */}

      <div className={style.time_main_box4}>
      <Button
            colorScheme="black"
            variant="link"
            marginRight="20px"
            fontWeight="0"
          >
            Cancel
          </Button>

          <button
            style={{
              borderRadius: "30px",
              color: "white",
              padding: "5px 15px",
              fontWeight: "bold",
              backgroundColor: "#006bff",
            }}
          >
            Next
          </button>
      </div>
    </div>

         {/* pavan code end */}
   
           </form>
        </Box>
   </Box>
  )
}