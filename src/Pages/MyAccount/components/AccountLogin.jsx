import { Box, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const AccountLogin = () => {
  return (
    <Box>
        <Stack spacing={10}>
            <HStack>
                <img src="" alt="" />
                <Text>You log in with a Google account.</Text>
            </HStack>
            <HStack alignItems='center' spacing={28}>
                <Box>
                <Heading size="md">Google account</Heading>
                <Text>userAccount</Text>
                </Box>
                <Link to="#">
                    <Text color="blue">change login</Text>
                </Link>
            </HStack>
            <HStack>
              <Text>Please</Text>
              <Link to="/" style={{color:"blue"}}>contact support</Link>
              <Text>if you nedd assistance.</Text>
            </HStack>
        </Stack>
    </Box>
  )
}
