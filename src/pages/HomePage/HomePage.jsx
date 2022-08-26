import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Grid, GridItem, Heading, HStack, Input, TagRightIcon, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import capture_1 from "./Images/capture_1.png";
import capture_2 from './Images/capture_2.png';
import capture_3 from './Images/capture_3.png';
import capture_4 from './Images/capture_4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const HomePage = () => {

   useEffect(()=>{
      AOS.init({ duration:2000 })
   },[])

  return (
    <Box width="100%" margin="auto" marginTop="8%">
      <Box width="80%" display="flex" justifyContent="space-between" margin='auto' marginBottom="7%">
         <Box width="35%">
             <Box width="350px" textAlign="left">
                <Heading as="h2" size="3xl" fontWeight="extrabold" lineHeight={1.2}>Easy Scheduling <span style={{color:"#006bff"}}>ahead</span></Heading>
             </Box>
             <Box width="360px" textAlign="left" mt={8}>
                <Text lineHeight={1.5} fontSize="md" color="gray.400">
                   Calendly is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work.
                </Text>
             </Box>
             <Box display="flex" width="360px" textAlign="left" mt={8}>
                <Box boxShadow="md">
                <Input width="250px" height="50px" placeholder='enter email'/>
                </Box>
                <Box ml={-2}>
                <Button colorScheme="messenger" height="50px" variant="solid" color="white">Signup</Button>
                </Box>
             </Box>
               <Box mt={1} textAlign="left" ml={1}><Text fontSize="sm">Create your free account. No credit card required.</Text></Box>
         </Box>
         <Box width="45%">
             <img width="100%" src={capture_1} alt="" />
         </Box>
      </Box>

      <Box padding="3%" width="100%" bg="#f8f8f8" textAlign="center" marginBottom="8%">
         <Box padding="2%" marginBottom="3%">
            <Text fontWeight="bold" fontSize="2xl" color="#1d344b">Simple scheduling for more than<br/><span style={{color:"blue"}}>10,000,000</span>users worldwide</Text>
         </Box>
         <Box height="50px" width="70%" margin="auto" display="flex" mt={2} alignItems="center" justifyContent="space-between">
             <Box className={styles.logo1}>
             <img width="80px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/2hJsUFIbIVEEEKj6R2YwR1/87ce3bb8fb245387aa9c376db473c079/ebay__3_.svg" alt="" />
             </Box>
             <Box className={styles.logo2}> 
             <img width="120px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/6aSAknGku3oEB7jL7xEjLs/244ce9c4c65c8425c8695a50ece73a4d/logo-ancestry.svg" alt="" />
             </Box>
             <Box className={styles.logo3}>
             <img width="80px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/5DR8HfsFIbSQZlUXsBqjWN/9d3183fc00336917d96cef59832b5403/Twilio-logo-red.svg" alt="" />
             </Box>
             <Box className={styles.logo4}>
             <img width="50px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBDR1fW5blQZfd9l/f34b8ee5d40aa13af7b0fb015e86e8d3/Vector__19_.svg" alt="" />
             </Box>
             <Box className={styles.logo5}> 
             <img width="80px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/42drnxHfXrNOGKnVE9iA3r/7a7cf32f65bd03e0d1d48a6b02bde3d5/Loreal__1_.svg" alt="" />
             </Box>
             <Box className={styles.logo6}>
             <img width="80px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/6f26aaf48346fb5dfa8318bb4a403e02/Compass__2_.svg" alt="" />
             </Box>
             <Box className={styles.logo7}>
             <img width="80px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/4AUQ47IN6ZBtXtWXt65L3D/0e998b1376e2e3b2fc5489cfa7b3f11c/Zendesk_wordmark__1_.svg" alt="" />
             </Box>
             <Box className={styles.logo8}>
             <img width="50px" height="100px" src="https://images.ctfassets.net/k0lk9kiuza3o/1Q5BQTaWAplnUICA96OWOw/be456a6b21b030de107077f2155ce467/Vector__22_.svg" alt="" />
             </Box>
        </Box>
      </Box>

    <Box width='80%' margin="auto" textAlign="center" marginBottom="9%">
       <Heading color="#1d344b ">We make it easy to get started</Heading>
       <Box marginTop="5%" display="flex" justifyContent='center' gap={8}>
         <Box boxShadow="2xl" width="350px" height="200px" p={5} textAlign="left">
         <img src='https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg' />
            <Heading mt={4} as="h6" size="sm">Create simple rules</Heading>
            <Text mt={3}>Let Calendly know your availability<br/>preferences and it'll do the work for<br/> you.</Text>
         </Box>
         <Box boxShadow="2xl" width="350px" p={5} textAlign="left">
         <img src='https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg' />
            <Heading mt={4} as="h6" size="sm">Share your link</Heading>
            <Text mt={3}>Send guests your Calendly link or<br/>embed it on your website.</Text>
         </Box>
         <Box boxShadow="2xl" width="350px" p={5} textAlign="left">
         <img src='https://images.ctfassets.net/k0lk9kiuza3o/2lyAPMRxz8pdvkah5K6NFp/14203e7358e18e312b30c9674d8e72f1/icon-checkmark.svg' />
            <Heading mt={4} as="h6" size="sm">Get booked</Heading>
            <Text mt={3}>They pick a time and the event is<br/>added to your calendar.</Text>
         </Box>
       </Box>
    </Box>
     
     <Box width="80%" margin='auto' textAlign="center" marginBottom="8%">
         <Heading marginBottom="3%" color="#1d344b" as="h5">Scheduling for any meeting type</Heading>
          <Box display="flex" flexDir="row" flexWrap="wrap" textAlign="left" gap={5} justifyContent="center">
               <Box boxShadow="2xl" width="550px" height="210px" p={5}>
                <img width="30px" src='https://images.ctfassets.net/k0lk9kiuza3o/6eeiV8vQ5r4wapPkjxwmVs/b70237791206b5580e72d77d0fbb60ff/icon-customers.svg'/>
                <Heading mt={5} size="md">One-on-one</Heading>
                <Text mt={4}>Let your clients and colleagues select open meeting types<br/>from your schedule</Text>
               </Box>
               <Box boxShadow="2xl" width="550px" height="210px" p={5}>
               <img width="30px" src='https://images.ctfassets.net/k0lk9kiuza3o/2ISl5s3a5RId9XpeuTJBxV/52a26ea61be5da23f0c2a83e73c2a9e6/Icon-Education.svg'/>
                <Heading mt={5} size="md">Group</Heading>
                <Text mt={4}>Book events for multiple attendees such as webinars and<br/>training sessions</Text>
               </Box>
               <Box boxShadow="2xl" width="550px" height="210px" p={5}>
               <img width="30px" src='https://images.ctfassets.net/k0lk9kiuza3o/6765yY5ajTUxB9MIz4nToI/00f0de305b8ac2ff4ad0ef7941a75a28/collective.svg'/>
                <Heading mt={5} size="md">Collective</Heading>
                <Text mt={4}>Schedule across your team’s calendars for events you co-<br/>host with others</Text>
               </Box>
               <Box boxShadow="2xl" width="550px" height="210px" p={5}>
               <img width="30px" src='https://images.ctfassets.net/k0lk9kiuza3o/35pgmxHTHZfJMr4HwHGibz/ee1cb916d14a7971fbaa8aa24766cf25/round_robin.svg'/>
                <Heading mt={5} size="md">Round robin</Heading>
                <Text mt={4}>Balance hosting responsibilities for your team automatically</Text>
               </Box>
          </Box>
     </Box>

     <Box p={8} bg="#f7faff" marginTop="5%" textAlign="center" marginBottom='5%'>
         <Text mb={5} color="#006bff">SOLUTIONS</Text>
         <Heading marginBottom="5%" color="#1d344b">The right Calendly for the work you do</Heading>
         <Box  display="flex" flexDir="row" flexWrap="wrap" textAlign="left" gap={5} justifyContent="center">
               <Box bg="whiteAlpha.900" boxShadow="2xl" width="370px" height="280px" p={5}>
                <img width="30px" src="https://images.ctfassets.net/k0lk9kiuza3o/2k4JUWdoiELNlIOiAgY8ZP/989d5854e82505f2c711363ed9d002e4/Icon-Sales.svg" alt="" />
                <Heading mt={5} size="sm">Sales</Heading>
                <Text mt={4} mb={5}>Spend more time selling, and less<br/>time on admin. Shorten your sales<br/>cycle by letting prospects schedule<br/>while they're in peak buying mode.</Text>
                <Link  to='#'>
                  <HStack >
                  <Text color="#006bff">Learn more</Text>
                  <ChevronRightIcon color="#006bff"/>
                  </HStack>
                </Link>
               </Box>
               <Box bg="whiteAlpha.900" boxShadow="2xl" width="370px" height="280px" p={5}>
               <img width="30px" src="https://images.ctfassets.net/k0lk9kiuza3o/2WoX1M1Mu6lUwJrfSGjX5b/a42359992f267f338df0161ba40acc7f/Icon-Demand-Generation.svg" alt="" />
                <Heading mt={5} size="sm">Marketing</Heading>
                <Text mt={4}  mb={5}>Convert interested prospects into<br/>Scheduled meetings and demos<br/>faster. Skip steps that cause<br/>customer friction.</Text>
                 <Link to='#'>
                  <HStack>
                  <Text color="#006bff">Learn more</Text>
                  <ChevronRightIcon color="#006bff"/>
                  </HStack>
                </Link>
               </Box>
               <Box bg="whiteAlpha.900" boxShadow="2xl" width="370px" height="280px" p={5}>
               <img width="30px" src="https://images.ctfassets.net/k0lk9kiuza3o/6KO0vF2ofioxGmQJGQBdT1/329be086ba555bf2393dd99c32753521/Icon-Customer-Success.svg" alt="" />
                <Heading mt={5} size="sm">Customer Success</Heading>
                <Text mt={4}  mb={5}>Offer exceptional support: Your<br/>clients will be delighted with<br/>one-click scheduling and<br/>increased respponsiveness.</Text>
                 <Link to='#'>
                  <HStack>
                  <Text color="#006bff">Learn more</Text>
                  <ChevronRightIcon color="#006bff"/>
                  </HStack>
                </Link>
               </Box>
               <Box bg="whiteAlpha.900" boxShadow="2xl" width="370px" height="280px" p={5}>
               <img width="30px" src="https://images.ctfassets.net/k0lk9kiuza3o/1kecwP9aYPUOD7cgexPgW5/bf271becdb7ff17e2939353e82792f9c/Icon-Revenue-Ops.svg" alt="" />
                <Heading mt={5} size="sm">Revenue Operations</Heading>
                <Text mt={4}  mb={5}>Streamline meeting and<br/>activity data. Calendly's native<br/>integrations with Salesforce<br/>and HubSpot ensure up-to-<br/>date reporting.</Text>
                 <Link to='#'>
                  <HStack>
                  <Text color="#006bff">Learn more</Text>
                  <ChevronRightIcon color="#006bff"/>
                  </HStack>
                </Link>
               </Box>
               <Box bg="whiteAlpha.900" boxShadow="2xl" width="370px" height="280px" p={5}>
               <img width="30px" src="https://images.ctfassets.net/k0lk9kiuza3o/Qze1UNJ9kIVk4kZVopC7z/ac18ecb4e93a0c7096c132181fa1f2bf/Icon-Recruiting.svg" alt="" />
                <Heading mt={5} size="sm">Recuriting</Heading>
                <Text mt={4}  mb={5}>Simplify recruitment by<br/>smoothing every aspect of the<br/>interview scheduling process,<br/>including automated follow-<br/>ups.</Text>
                 <Link to='#'>
                  <HStack>
                  <Text color="#006bff">Learn more</Text>
                  <ChevronRightIcon color="#006bff"/>
                  </HStack>
                </Link>
               </Box>
               <Box bg="whiteAlpha.900" boxShadow="2xl" width="370px" height="280px" p={5}>
               <img width="30px" src="https://images.ctfassets.net/k0lk9kiuza3o/4y0cQDGC4yqwssAQYvFivo/3fec9fbec6f26274fd09b9bcffc18c32/IT_Solution.svg" alt="" />
                <Heading mt={5} size="sm">Information Technology</Heading>
                <Text mt={4}  mb={5}>Increase scheduling<br/>Productivity across your org<br/>while maintaining full security<br/>and control over users.</Text>
                 <Link to='#'>
                  <HStack>
                  <Text color="#006bff">Learn more</Text>
                  <ChevronRightIcon color="#006bff"/>
                  </HStack>
                </Link>
               </Box>
          </Box>
     </Box>

     <Box textAlign='center' marginBottom="10%" >
        <Heading marginBottom="2%" color="#1d344b">Do more of what you do best</Heading>
        <Text fontSize="xl">With scheduling hassles and interruptions gone, your day is cleared for<br/>accomplishment.</Text>
     </Box>

     <Box data-aos="zoom-in" width="80%" margin='auto' display="flex" justifyContent="space-between" marginBottom='15%' alignItems="center" >
        <Box width="38%" textAlign="left">
           <Heading mb={5} color="#006bff" fontWeight="semibold" letterSpacing={1} size="sm">WORKFLOW MANAGEMENT</Heading>
           <Box>
            <Heading mb={5} fontSize="25px">Automate reminders and follow-ups</Heading>
           </Box>
           <Box>
           <Text fontSize="lg">
            Calendly puts your entire meeting workflow on autopilot, sending everything from reminder emails to thank you notes, so you can focus on the work only you can do. It’s like getting an assistant, even if you’re a business of one.
            </Text>
           </Box>
        </Box>
        <Box width="40%" >
           <img src={capture_2} alt="" />
        </Box>
     </Box>

     <Box  data-aos="zoom-in"width="80%" margin='auto' display="flex" justifyContent="space-between" alignItems="center" marginBottom='15%' >
        <Box width="40%" >
           <img src={capture_3} alt="" />
        </Box>
        <Box width="38%" textAlign="left">
           <Heading color="#006bff" letterSpacing={1} fontWeight="semibold" mb={5} size="sm">ON-DEMAND SCHEDULING</Heading>
           <Box >
            <Heading mb={5} fontSize="22px">Make more connections and reduce cancellations</Heading>
            <Text fontSize="lg">
            Prospects can schedule meetings in just a few clicks – whenever the moment is right. And cancellations go down because rescheduling is easy, fast, and on their terms.
            </Text>
           </Box>
        </Box>
     </Box>

     <Box   data-aos="zoom-in" width="80%" margin='auto' display="flex" alignItems="center" justifyContent="space-between" marginBottom='15%'>
        <Box width="35%" textAlign="left">
           <Heading color="#006bff" letterSpacing={1} fontWeight="semibold" mb={5} size="sm">THE COURTEOUS APPROACH</Heading>
           <Box >
            <Heading mb={5} fontSize="25px">Delight invitees with modern scheduling</Heading>
            <Text fontSize="lg">
            Time is a precious commodity. Calendly is the courteous way to book meetings and other appointments, because scheduling with just a few clicks makes the most of everyone's time.
            </Text>
           </Box>
        </Box>
        <Box width="40%">
           <img width="350px" src={capture_4} alt="" />
        </Box>
     </Box>

     <Box bg="#f7faff" padding="3%" textAlign="center">
         <Heading marginBottom="3%">Try Calendly free</Heading>
         <Box marginBottom="3%">
            <Text fontSize="lg">After your 14-day trial of our Teams plan, enjoy the Free version of Calendly-<br/>forever.</Text>
         </Box>
         <Box mb={2}>
            <Button padding="1.8%" colorScheme="messenger">Start for free</Button>
         </Box>
         <Text>To inquire about our Enterprise plans, clikc <span style={{color:"#006bff"}}>here.</span></Text>
     </Box>
    </Box>
  )
}
