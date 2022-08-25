import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, HStack, Select, Text } from '@chakra-ui/react'
import React from 'react'

export const AddEventPage = () => {
  return (
   <Box width="70%" margin="auto" marginTop="3%">
       <Box width="60%" padding="2%" marginBottom="3%">
            <HStack justifyContent="space-between">
                <Button variant="outline" fontWeight="light" rounded="3xl" colorScheme="messenger">
                    <ChevronLeftIcon/>
                    Back
                </Button>
                <Heading size="md" fontWeight="semibold">Add One-on-One Event Type</Heading>
            </HStack>
        </Box>

        <Box >
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

        <Box border="2px solid" height="500px">
           <HStack justifyContent="space-between">
             <Box>
                <Heading size="sm">What event is this?</Heading>
                <Text>No location given</Text>
             </Box>
             <Box>
                <HStack>
                    <Button>Cancel</Button>
                    <Button variant="solid" colorScheme="messenger">Next</Button>
                </HStack>
             </Box>
           </HStack>
        </Box>
   </Box>
  )
}
