import React, { useState } from 'react'
import { Box, Button, Container, Grid, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Text, useDisclosure, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import {ChevronDownIcon, ChevronRightIcon} from "@chakra-ui/icons"
import {Link} from "react-router-dom";
import styles from './Nav.module.css';

export const Navbar = () => {

   // const [showContent,setShowContent] = useState(false)
   // const [showresources,setShowResources] = useState(false)

   // const handleMouseEnter = e=>{
   //    setShowContent(true);
   // }
   // const handleMouseLeave = e=>{
   //    setShowContent(false);
   // }

   // const showResourcesBox = () =>{
   //    setShowResources(true)
   // }

   // const leaveResources = ()=>{
   //    setShowResources(false);
   // }

  return (
    

   <Box  top='0' padding="2%" width="100%" position="fixed" bg="chakra-body-bg" boxShadow="lg" zIndex="2">

   <Box display="flex"  width="100%" alignItems="center" justifyContent="space-evenly" >
   <Box >
      <Link to="/"><img width="150px" src='https://mma.prnewswire.com/media/1682590/Calendly__Logo.jpg?w=200'/>
      </Link> 
    </Box>

    <Box className={styles.menuContent} display="flex" alignItems="center" gap="8">
    <Box>
    <HStack>
           <Link to="/individual">  <Heading as="h4" fontWeight="semibold" size="sm">Individuals</Heading> </Link>
    </HStack>  
    </Box>

    <Box>
           <HStack cursor="pointer">
           <Link to='/teams'><Heading as="h4" size="sm" fontWeight="semibold">Teams</Heading></Link>
           </HStack>
    </Box>

    <Box>
          <HStack>
          <Heading as="h4" size="sm" fontWeight="semibold">Enterprise</Heading>
       </HStack>
    </Box>

    <Box zIndex={1}>
        <ul >
            <li >
                <HStack>
               <Link to="/">< Heading as="h4" fontWeight="semibold" size="sm">Product</Heading> </Link>
               <ChevronDownIcon/>
                </HStack>
               
           
                           <Box className={styles.menuSub}
                           width="100%" 
                           height="auto" 
                           position="absolute"
                           display='none'
                            >
                          <Grid textAlign="left" templateColumns="repeat(3,1fr)"  boxShadow='dark-lg'>
                            <GridItem  bg="#DAEAF1" width='250px' roundedTopLeft='md'roundedBottomLeft='md' >
                              <Box p={5}>
                              <Link to=''>
                              <Heading as="h6" size="2sm" fontWeight="semibold">Product</Heading>
                               <Text mt={1}>
                                  Get to know the leader in automated scheduling and see why millions connect using Calendly.
                               </Text>
                              </Link>
                              </Box>
                            </GridItem>
               
                            <GridItem width="500px" bg="chakra-body-bg">
                              <Box p={5} >
                               <Link to='/'>
                                   <Heading as="h6" size="2sm" fontWeight="semibold">Features</Heading>
                                   <Text mt={1}>
                                        Flexible, intuitive features for every<br/> scheduling need.
                                   </Text>
                               </Link>
                               <br/>
                               <hr/>
                               <Box width="100%" display="flex" flexDir="row" flexWrap="wrap" rowGap="20px" columnGap="60px">
                               <Box width="200px">
                                       <ChevronDownIcon/>
                                       <Link to='#'>
                                       <Heading as="h6" size="2sm">Routing Forms</Heading>
                                       <Text fontSize="xs">
                                           Request information to efficiently screen and qualify prople before they can schedule with you.
                                       </Text>
                                       </Link>
                                   </Box>
                                   <Box width="200px">
                                       <ChevronDownIcon/>
                                       <Link to='#'>
                                       <Heading as="h6" size="2sm">Embeds</Heading>
                                       <Text fontSize="xs">
                                           Add Calendly on your website to steamline scheduling.
                                       </Text>
                                       </Link>
                                   </Box>
                                   <Box width="200px">
                                       <ChevronDownIcon/>
                                       <Link to='#'>
                                       <Heading as="h6" size="2sm">Team Schdeuling</Heading>
                                       <Text fontSize="xs">
                                           Customize exactly how and when you are booked
                                       </Text>
                                       </Link>
                                   </Box>
                                   <Box width="200px">
                                       <ChevronDownIcon/>
                                     <Link to='#'>
                                     <Heading as="h6" size="2sm">Calendar Connections</Heading>
                                       <Text fontSize="xs">
                                           Connect up to six calendars per user to check real-time availability.
                                       </Text>
                                     </Link>
                                   </Box>
                                   <Box width="200px">
                                       <ChevronDownIcon/>
                                       <Link to='#'>
                                       <Heading as="h6" size="2sm">Availability Preferences</Heading>
                                       <Text fontSize="xs">
                                           Cusomize exactly how and when you are booked.
                                       </Text>
                                       </Link>
                                   </Box>
                                   <Box width="200px">
                                       <ChevronDownIcon/>
                                      <Link to='#'>
                                      <Heading as="h6" size="2sm">Meeting Polls</Heading>
                                       <Text fontSize="xs">
                                           Let your invitees vote on preferred times before scheduling.
                                       </Text>
                                      </Link>
                                   </Box>
                               </Box>
                                 <Box mt={5}>
                                   <Link to='/'>
                                   <HStack alignItems='center'>
                                       <Text>See all features</Text>
                                       <ChevronRightIcon/>
                                   </HStack>
                                   </Link>
                                 </Box>
                              </Box>
                            </GridItem>
               
                            <GridItem width="300px" roundedTopRight='md'roundedBottomRight='md' bg="chakra-body-bg">
                               <Box p={5}>
                                   <Link to='#'>
                                      <Heading as="h6" size="2sm">Solutions</Heading>
                                      <Text mt={1}>
                                       Explore how thought leaders in your industry use Calendly
                                      </Text>
                                   </Link>
                                   <br/>
                                   <hr/>
                                    <Box mt={5}>
                                       <Stack spacing={6}>
                                           <Link to='#'>
                                              <Heading as='h6' size="2sm">Sales</Heading>
                                           </Link>
                                           <Link to='#'>
                                              <Heading as='h6' size="2sm">Recruiting</Heading>
                                           </Link>
                                           <Link to='#'>
                                              <Heading as='h6' size="2sm">Revene Operations</Heading>
                                           </Link>
                                           <Link to='#'>
                                              <Heading as='h6' size="2sm">Customer Success</Heading>
                                           </Link>
                                           <Link to='#'>
                                              <Heading as='h6' size="2sm">Information Technology</Heading>
                                           </Link>
                                           <Link to='#'>
                                              <Heading as='h6' size="2sm">Marketing</Heading>
                                           </Link>
                                       </Stack>
                                    </Box>
                                    <Box mt={5}>
                                       <Link to='#'>
                                         <Heading as='h6' size="2sm">Integrations</Heading>
                                         <Text fontSize="sm">
                                           Seamless connections to your favorite calendars, tools and apps.
                                         </Text>
                                       </Link>
                                    </Box>
                               </Box>
                            </GridItem>
                          </Grid>
                       </Box>
            </li>
        </ul>
    </Box>
     
    <Box>
          <HStack>
       <Link to="/price"> <Heading as="h4" size="sm" fontWeight="semibold">Pricing</Heading></Link>
       </HStack>
    </Box>

    <Box>
        <ul>
          <li>
          <HStack>
          <Heading  as="h4" size="sm" fontWeight="semibold">Resources</Heading>
          <ChevronDownIcon/>
       </HStack>

                   <Box className={styles.menuSub1}  width="100%" height="250px" position="absolute" display="none"
                   >
                   <Grid textAlign="left" templateColumns="repeat(3,1fr)" >
                         <GridItem bg='#DAEAF1'  width='250px' >
                           <Box p={5}>
                           <Link to=''>
                           <Heading as="h6" size="2sm" fontWeight="semibold">Resources</Heading>
                            <Text mt={1}>
                               More in-depth information about every corner of the Calendly scheduling ecosystem.
                            </Text>
                           </Link>
                           </Box>
                         </GridItem>
            
                         <GridItem width="550px" bg="chakra-body-bg">
                           <Box p={5} display="flex" flexWrap="wrap" flexDir="row" justifyContent="space-around" columnGap="90px" rowGap="40px">
                             <Box width="200px">
                                <Link to="#">
                                  <ChevronDownIcon/>
                                  <Heading as="h6" size="sm">About</Heading>
                                  <Text fontSize="xs">Learn about who we are.</Text>
                                </Link>
                             </Box>
                             <Box width="200px">
                                <Link to="#">
                                  <ChevronDownIcon/>
                                  <Heading as="h6" size="sm">Customer Stories</Heading>
                                  <Text fontSize="xs">Hear from our Valued customers</Text>
                                </Link>
                             </Box>
                             <Box width="200px">
                                <Link to="#">
                                  <ChevronDownIcon/>
                                  <Heading as="h6" size="sm">Resources</Heading>
                                  <Text fontSize="xs">Explore all of our resources.</Text>
                                </Link>
                             </Box>
                             <Box width="200px">
                                <Link to="#">
                                  <ChevronDownIcon/>
                                  <Heading as="h6" size="sm">Help Center</Heading>
                                  <Text fontSize="xs">Explore how to use Calendly.</Text>
                                </Link>
                                <br/>
                                <hr/>
                             </Box>
                             <Box width="200px">
                                <Link to="#">
                                  <ChevronDownIcon/>
                                  <Heading as="h6" size="sm">Blog</Heading>
                                  <Text fontSize="xs">Thoughts,news, and best practices.</Text>
                                </Link>
                             </Box>
                             <Box width="200px" mt={-4}>
                                <Stack spacing={5}>
                                    <Link to="#">
                                    <Heading as='h6' size="sm">Newsroom</Heading>
                                    </Link>
                                    <Link to="#">
                                    <Heading as='h6' size="sm">Partners</Heading>
                                    </Link>
                                    <Link to="#">
                                    <Heading as='h6' size="sm">Developers</Heading>
                                    </Link>
                                    <Link to="#">
                                    <Heading as='h6' size="sm">Careers</Heading>
                                    </Link>
                                </Stack>
                             </Box>
                           </Box>
                         </GridItem>
            
                       </Grid>
                    
                    </Box>
   
          </li>
        </ul>
    </Box>

    </Box>

   <Box display="flex" gap="4" alignItems="center">
    <Box className={styles.SL_BTN2}>
       <Link to={'/login'}> <button  >LOG IN</button></Link>
    </Box>
    <Box className={styles.SL_BTN1}>
      <Link to="/signup">   <button style={{color:"white",background:"#006bff",padding:"8px",width:"110px",borderRadius:"10px"}}>My Account</button>
      </Link>
    </Box>
   </Box>
   </Box>
   </Box>
    
  )
}