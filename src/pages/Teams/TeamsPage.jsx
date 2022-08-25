import {
  Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Tabs, TabList, TabPanels, Tab, TabPanel
  } from '@chakra-ui/react';
  import React from "react";
import { Link } from 'react-router-dom';
import team_standardization from './Teampage_Image/team_standardization.webp'
import Team_1 from './Teampage_Image/Team_1.webp'
import Team_2 from './Teampage_Image/Team_2.jpg'
import Team_3 from './Teampage_Image/Team_3.jpg'
import Team_5 from './Teampage_Image/Team_5.jpg'
import Team_Round_Robin from './Teampage_Image/Team_Round_Robin.jpg'
import Team_Salesforce from './Teampage_Image/Team_Salesforce.jpg'

import smartShedule from './Teampage_Image/smartSchedule.png'
export const TeamsPage = () => {
  return (
    <Box margin={"auto"} justify={"center"} marginTop={"105px"}>
      {/* calendly for temas */}
    <Stack minH={'80vh'} width={"90%"} margin={"auto"} marginBottom={"40px"} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Text
              as={'span'}
              color={'blue.400'}
              >
              CALENDLY FOR TEAMS
          </Text><br />{' '}
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'#0b3558'} as={'Heading'}>
            Smarter scheduling for teams
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'lg', lg: '2xl' }} width={"85%"} color={'gray.500'}>
          Whether your team’s performance is measured by sales revenue, recruiting pipeline, or customer retention,
          scheduling automation enables your team to hit goals faster.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              radius={'10px'}
              bg={'blue.400'}
              width={"170px"}
              height={"60px"}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Start for free
            </Button>
            <Button 
            style={{background:"white"}}
            radius={'10px'}
            border={"2px solid blue"} 
           bg={"white"}
            width={"170px"}
            height={"60px"}
            color='blue'
            
            _hover={{
              borderColor:"blue.500",
              color:"blue.500"
            }}
            >
              Contact Sales
              </Button>
          </Stack>
        </Stack>
        
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
           Team_1
          }
        />
      </Flex>
    </Stack>
  {/* speed of connection */}
     <Stack minH={'40vh'} width={"80%"} marginBottom={"40px"} marginLeft={"60px"} direction={{ base: 'column', md: 'row' }}>
     <Flex p={8} flex={1} align={'center'} justify={'center'}>
       <Stack spacing={6} w={'full'} maxW={'lg'}>
         <Text
             as={'span'}
             color={'blue.400'}
             >
             SPEED OF CONNECTION
         </Text><br />{' '}
         <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
           <Text color={'#0b3558'} as={'Heading'}>
           Outperform the competition with faster connections
           </Text>{' '}
         </Heading>
         <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
         You can’t waste time when prospects, clients, and candidates express interest. 
         Avoid missed opportunities by automatically qualifying and routing website visitors to specific team members.
         You can also pool scheduling availability together to offer more options to connect.
         </Text>
       </Stack>
     </Flex>
     <Flex flex={0.75}>
       <Image
         alt={'Login Image'}
         objectFit={'cover'}
         height={"500px"}
         src={
        Team_2
         }
       />
     </Flex>
     </Stack>

     {/* time management */}
      <Stack minH={'40vh'} width={"80%"} marginBottom={"40px"} marginLeft={"60px"} direction={{ base: 'column', md: 'row' }}>
     <Flex p={10} flex={0.75}>
       <Image
         alt={'Login Image'}
         objectFit={'cover'}
         height={"400px"}
         src={
          Team_3
         }
       />
     </Flex>
     <Flex flex={1} align={'center'} justify={'center'}>
       <Stack spacing={6} w={'full'} maxW={'lg'}>
         <Text
             as={'span'}
             color={'blue.400'}
             >
             TIME MANAGEMENT
         </Text><br />{' '}
         <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
           <Text color={'#0b3558'} as={'Heading'}>
           Automate scheduling, improve team performance
           </Text>{' '}
         </Heading>
         <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
         Scheduling automation eliminates time-consuming admin tasks so your team can focus on higher priorities. 
         With actionable insights into your team’s scheduling activities and integrations with your team’s favorite tools, 
         you can identify potential process improvements and empower your team to work more efficiently. 
         </Text>
       </Stack>
     </Flex>
     </Stack>

     {/* team standardization */}
     <Stack minH={'40vh'} width={"80%"} marginBottom={"40px"} marginLeft={"60px"} direction={{ base: 'column', md: 'row' }}>
     <Flex p={8} flex={1} align={'center'} justify={'center'}>
       <Stack spacing={6} w={'full'} maxW={'lg'}>
         <Text
             as={'span'}
             color={'blue.400'}
             >
             TEAM STANDARDIZATION
         </Text><br />{' '}
         <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
           <Text color={'#0b3558'} as={'Heading'}>
           Improve the customer experience with consistent scheduling
           </Text>{' '}
         </Heading>
         <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
         Managed Events let you assign and lock Event Type details — such as meeting descriptions, invitee questions, and notifications — so your team delivers a reliable and professional experience every time.
         </Text>
       </Stack>
     </Flex>
     <Flex flex={0.75}>
       <Image
         alt={'team standardization'}
         objectFit={'cover'}
         height={"500px"}
         src={
          team_standardization
         }
         style={{width:'100%'}}
       />
     </Flex>
     </Stack>

     {/* consistency in education */}
     {/* <Stack minH={'40vh'} width={"80%"} marginBottom={"40px"} marginLeft={"60px"} direction={{ base: 'column', md: 'row' }}>
       <Flex p={8} flex={1} align={'center'} justify={'center'}>
         <Stack spacing={6} w={'full'} maxW={'lg'}>
           <Text
               as={'span'}
               color={'blue.400'}
               >
               CONSISTENCY IN EXECUTION
           </Text><br />{' '}
           <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
             <Text color={'#0b3558'} as={'Heading'}>
             Streamline communications across the meeting lifecycle
             </Text>{' '}
           </Heading>
           <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'} fontWeight={"light"}>
           From pre-call email questionnaires and confirmation texts to post-call follow-up links, 
           meeting best practices can be automatically applied across your team. These templates and workflows increase engagement and ensure consistent, 
           professional communications with your customers and candidates.
           </Text>
         </Stack>
       </Flex>
       <Flex flex={0.75}>
         <Image
           alt={'Login Image'}
           objectFit={'cover'}
           height={"500px"}
           src={
             "https://images.ctfassets.net/k0lk9kiuza3o/wyOsTDMiF1GBZ0HYBEwCX/8f1181d4039431b7873443c8166cf543/Calendly-Automation-Streamline.png?w=1164&h=932&q=50&fm=webp"
           }
         />
       </Flex>
       </Stack> */}
     <Stack minH='40vh' width={'80%'} margin={'auto'} marginBottom='40px' direction={{base:'column',md:'row'}}>
      <Flex p={10} flex={0.75} >
        <Image  alt={'Login Image'}
           objectFit={'cover'}
           height={"400px"} src={Team_5} />
      </Flex>

      <Flex p={8} flex={1} align={'center'} justifyContent={'center'}>
        <Stack spacing={6} w={'full'} maxW='lg'>
          <Text as={'span'} color={'blue.500'} >CONSISTENCY IN EXECUTION</Text>
          <br/>
          <Heading fontSize ={{base:'2xl',md:'3xl',lg:'4xl'}}>
            <Text color={'#ob3585'} as={'Heading'} >

          Streamline communications across the meeting lifecycle
            </Text>
          </Heading  >
          <Text fontSize={{base:'md',lg:'lg'}} color={'black'} fontWeight={'light'} > From pre-call email questionnaires and confirmation texts to post-call follow-up links, 
           meeting best practices can be automatically applied across your team. These templates and workflows increase engagement and ensure consistent, 
           professional communications with your customers and candidates.</Text>
        </Stack>
      </Flex>
     </Stack>

     <Tabs isFitted width={'90%'} margin={'auto'} variant='line'>
      <Box align={'center'} textAlign={'center'} marginTop={'10vh'}>
        <Text as={'span'}  fontWeight={'bold'} fontSize={'18px'} color={'blue.300'}>
          FEATURES
        </Text>
      </Box>
      <Box marginBottom={'10vh'} marginTop={'5vh'} >
        <Heading align={'center'} >
          Favorite Team Features
        </Heading>
      </Box>
  <TabList mb={'1em'}  width={'80%'} margin={'auto'} fontSize={'158px'} color={'#52708f'}>
    <Tab fontWeight={'extrabold'}>Team Scheduling Pages</Tab>
    <Tab fontWeight={'extrabold'}>Automated Workflow</Tab>
     <Tab fontWeight={'extrabold'}>Round Robin Events</Tab>
    <Tab fontWeight={'extrabold'}>Salesforce Integration</Tab>
  </TabList>

  <TabPanels margin={'auto'} pl={'60px'}>
     {/* <p>tabpanel first!</p> */}

    <TabPanel>
      <Stack minH={'40vh'} width={'90%'} marginBottom={'40px'} direction={{base:'column',md:'row'}}>
        <Flex p={8} flex={1} align={'center'} >
 <Stack spacing={6} w={'full'} maxW={'lg'}>
  <Heading>
    <Text as={'span'} color={'black'} >
      Team Scheduling Pages
    </Text>
  </Heading>
  <br/>
  
  <Text fontSize={{base:'md',lg:'lg'}} color={'black'} fontWeight={'light'} >
  Create a personalized scheduling page for a team instead of individual booking pages. Invitees with the link can access and choose from meeting types based on their needs.
  </Text>
  <Link to={'#'} >
    <Text textDecoration={'none'} color={'blue.400'} fontWeight={'extrabold'} _hover={{
      textDecoration:'underline',
      color:'black'
    }} > Learn More {'>'}</Text>
   </Link>
 </Stack>
        </Flex>

        <Flex margin={'40px'} flex={1.2} >
          <Image alt='Tab_1' 
          objectFit={'cover'}
          height={'500px'}
          src={Team_2} />
        </Flex>
      </Stack>
     
    </TabPanel>
     {/* <p>tabpanel two!</p> */}
    <TabPanel>
      <Stack direction={{base:'column',md:'row'}} minH={'40vh'} width={'90%'} marginBottom={'40px'} >
        <Flex p={8} flex={1} align={'center'} justify={
          'center'
        } >
          <Stack spacing={6} w={'full'} maxW='lg' >
            <Heading>
              <Text as={'span'} color={'black'} >Automated Workflow</Text>
            </Heading>
            <br />
            <Text fontSize={{base:'md',lg:'lg'}} color={'black'} fontWeight={'light'} >Apply pre-built notifications, reminders, and follow-ups to multiple event types that can be quickly managed and updated from one location.</Text>
            <Link to='#' >
            <Text textDecoration={'none'} color={'blue.400'} 
            fontWeight={'extrabold'} 
             _hover={{
              textDecoration:'underline',
              color:'black'
             }}
             > Learn More {'>'}</Text>
           </Link>
          </Stack>
        </Flex>

        <Flex margin={'40px'} flex={1.2}>
<Image alt={'automated workflow'}
 objectFit={'cover'}
 height={'500px'}
 src={Team_3}
/>
        </Flex>
      </Stack>
    
    </TabPanel>

      {/* <p>three!</p> */}
    <TabPanel>
    <Stack direction={{base:'column',md:'row'}} minH={'40vh'} width={'90%'} marginBottom={'40px'} >
        <Flex p={8} flex={1} align={'center'} justify={
          'center'
        } >
          <Stack spacing={6} w={'full'} maxW='lg' >
            <Heading>
              <Text as={'span'} color={'black'} >Round Robin Events</Text>
            </Heading>
            <br />
            <Text fontSize={{base:'md',lg:'lg'}} color={'black'} fontWeight={'light'} >Surface times from multiple people’s calendars to provide customers with more options to choose from. Round Robin event types can be configured to automatically optimize by availability or equal distribution across your team.</Text>
            <Link to='#' >
            <Text textDecoration={'none'} color={'blue.400'} 
            fontWeight={'extrabold'} 
             _hover={{
              textDecoration:'underline',
              color:'black'
             }}
             > Learn More {'>'}</Text>
           </Link>
          </Stack>
        </Flex>

        <Flex margin={'40px'} flex={1.2}>
<Image alt={'automated workflow'}
 objectFit={'cover'}
 height={'500px'}
 src={Team_Round_Robin}
/>
        </Flex>
      </Stack>
    </TabPanel>
    
      {/* <p>four!</p> */}
    <TabPanel>

    <Stack direction={{base:'column',md:'row'}} minH={'40vh'} width={'90%'} marginBottom={'40px'} >
        <Flex p={8} flex={1} align={'center'} justify={
          'center'
        } >
          <Stack spacing={6} w={'full'} maxW='lg' >
            <Heading>
              <Text as={'span'} color={'black'} >Salesforce Integration</Text>
            </Heading>
            <br />
            <Text fontSize={{base:'md',lg:'lg'}} color={'black'} fontWeight={'light'} >With Calendly connected to Salesforce, customer records stay up to date, regardless of their status. When a Calendly meeting gets booked, a lead automatically gets created and if the lead already exists, the lead auto-updates with meeting activity.</Text>
            <Link to='#' >
            <Text textDecoration={'none'} color={'blue.400'} 
            fontWeight={'extrabold'} 
             _hover={{
              textDecoration:'underline',
              color:'black'
             }}
             > Learn More {'>'}</Text>
           </Link>
          </Stack>
        </Flex>

        <Flex margin={'40px'} flex={1.2}>
<Image alt={'automated workflow'}
 objectFit={'cover'}
 height={'500px'}
 src={Team_Salesforce}
/>
        </Flex>
      </Stack>
    </TabPanel>
  </TabPanels>
</Tabs>


<Image src={smartShedule}/>

     
      </Box>
  )
}
