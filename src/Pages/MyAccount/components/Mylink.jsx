import { Box, HStack, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export const Mylink = () => {
  const currentUser = useSelector((store)=>store.authReducer.currentUser)  
  return (
    <Box width="350px">
       <Stack spacing={10}>
       <Text>
        Changing your Calendly URL will mean that all of your copied links will no longer work and will nedd to be updated.
       </Text>
       <Box>
        <HStack>
          <Text>Calendly.com/</Text>
          <Input placeContent='username' value={currentUser.displayName}/>
        </HStack>
       </Box>
       <button style={{background:'blue',color:"white",borderRadius:"50px",width:"150px",padding:"5px"}}>Save Changes</button>
       </Stack>
    </Box>
  )
}
