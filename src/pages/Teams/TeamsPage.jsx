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
export const TeamsPage = () => {
  return (
    <Box margin={"auto"} justify={"center"}>
    <Stack minH={'80vh'} width={"90%"} marginBottom={"40px"} marginLeft={"60px"} direction={{ base: 'column', md: 'row' }}>
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
              rounded={'full'}
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
            rounded={'full'} 
            border={"2px solid black"} 
            bg={"white"}
            width={"170px"}
            height={"60px"}
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
            "https://images.ctfassets.net/k0lk9kiuza3o/3YIhgib2rKRXYTHA9ZxSYN/15ff54601eafef635f098108e450cd86/Teams_Hero_Image_Small.png?w=1366&h=1108&q=50&fm=webp"
          }
        />
      </Flex>
    </Stack>
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
           "https://images.ctfassets.net/k0lk9kiuza3o/zLDG89VPUNmWTS6SXf3W4/31f28cdea9417112d43e2270f554c289/Calendly-Availability-In-A-Click.png?w=1180&h=1107&q=50&fm=webp"
         }
       />
     </Flex>
     </Stack>
      <Stack minH={'40vh'} width={"80%"} marginBottom={"40px"} marginLeft={"60px"} direction={{ base: 'column', md: 'row' }}>
     <Flex p={10} flex={0.75}>
       <Image
         alt={'Login Image'}
         objectFit={'cover'}
         height={"400px"}
         src={
           "https://images.ctfassets.net/k0lk9kiuza3o/6rrSFLQXzyJUdnnnrAbhpb/16ec1ec41c24edc00ad2ac3d71148a0c/Calendly-Teams-Workflows.png?w=1140&h=924&q=50&fm=webp"
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
     
      </Box>
  )
}
