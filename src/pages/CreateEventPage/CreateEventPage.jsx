import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export const CreateEventPage = () => {
  return (
    <Box width='70%' margin="auto" marginTop="3%">
        <Box width="60%" padding="2%">
            <HStack justifyContent="space-between">
                <Button variant="outline" fontWeight="light" rounded="3xl" colorScheme="messenger">
                    <ChevronLeftIcon/>
                    Back
                </Button>
                <Heading size="md">Create New Event Type</Heading>
            </HStack>
        </Box>

        <Box marginTop="3%" >
            <Box padding="2%" marginBottom="2%">
                <HStack justifyContent="space-between">
                    <Box display="flex" gap="8" alignItems="center">
                    <img width='60px' src="https://assets.calendly.com/packs/frontend/media/one_on_one-6206433649431f0b4804.svg" alt="" />
                    <Box>
                        <Heading mb={1} size="md">One-on-One</Heading>
                        <Text>Let an invitee pick a time to meet with you</Text>
                    </Box>
                    </Box>
                    <Box>
                        <Button colorScheme="messenger" p={5} fontWeight="semi-bold" rounded="3xl">Create</Button>
                    </Box>
                </HStack>
            </Box>
            <Box padding="2%" marginBottom="2%">
                <HStack justifyContent="space-between">
                    <Box display="flex" gap="8" alignItems="center">
                    <img width='60px' src="https://assets.calendly.com/packs/frontend/media/group-7eac5d967740a9799590.svg" alt="" />
                    <Box>
                        <Heading mb={1} size="md">Group</Heading>
                        <Text>Let multiple invitees meet with you at one time.</Text>
                    </Box>
                    </Box>
                    <Box>
                        <Button colorScheme="messenger" p={5} fontWeight="semi-bold" rounded="3xl">Create</Button>
                    </Box>
                </HStack>
            </Box>
            <Box padding="2%" marginBottom="2%">
                <HStack justifyContent="space-between">
                    <Box display="flex" gap="8" alignItems="center">
                    <img width='60px' src="https://assets.calendly.com/packs/frontend/media/collective-4e201a8dd006b0d78f95.svg" alt="" />
                    <Box>
                        <Heading mb={1} size="md">Collective</Heading>
                        <Text>Host an event with another person and let invitees pick a time when you’re all available.</Text>
                    </Box>
                    </Box>
                    <Box>
                        <Button colorScheme="messenger" p={5} fontWeight="semi-bold" rounded="3xl">Create</Button>
                    </Box>
                </HStack>
            </Box>
            <Box padding="2%" marginBottom="2%">
                <HStack justifyContent="space-between">
                    <Box display="flex" gap="8" alignItems="center">
                    <img width='60px' src="https://assets.calendly.com/packs/frontend/media/round_robin-310498d275de8c1f7e4a.svg" alt="" />
                    <Box>
                        <Heading mb={1} size="md">Round Robin</Heading>
                        <Text>Create an event that cycles between multiple hosts.</Text>
                    </Box>
                    </Box>
                    <Box>
                        <Button colorScheme="messenger" p={5} fontWeight="semi-bold" rounded="3xl">Create</Button>
                    </Box>
                </HStack>
            </Box>
        </Box>

        <Box padding='2%'>
          <Heading mb={5} size="sm" color="#888787">More ways to meet</Heading>
          <HStack justify="space-between" spacing={5}>
             <Box boxShadow="2xl" rounded="md" width="500px" height="220px" padding="2%">
                <img width="40px" src='https://images.squarespace-cdn.com/content/v1/5bab751fe666691ace3233cc/1593704968839-S32ZIG28GT1MUVP0X64P/vouchers.png?format=300w'/>
                <Box mb={9}>
                    <Heading mb={2} size="md">One-off meeting</Heading>
                    <Text>Invite someone to pick a time to meet with you.</Text>
                </Box>
                <Button variant="outline" fontWeight="light" colorScheme="messenger" rounded="3xl">Create</Button>
             </Box>
             <Box boxShadow="2xl" rounded="md" width="500px" height="220px" padding="2%">
             <img width="50px" src='https://www.di-soric.com/var/site/storage/images/int-market/produktvergleich/99787-2-ger-DE/Produktvergleich.png'/>
                <Box mb={9}>
                    <Heading mb={2} size="md">Meeting poll</Heading>
                    <Text>Schedule a group meeting after offering times for a vote.</Text>
                </Box>
                <Button variant="outline" fontWeight="light" colorScheme="messenger" rounded="3xl">Create</Button>
             </Box>
          </HStack>
        </Box>
    </Box>
  )
}
