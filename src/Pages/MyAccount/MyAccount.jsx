import { Box, Heading, HStack, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AccountLogin } from './components/AccountLogin'
import { Mylink } from './components/Mylink'
import { Profile } from './components/Profile'

export const MyAccount = () => {

   const [showProfile,setShowProfile] = useState(false);
   const [showLink,setShowLink] = useState(false);
   const [showLogin,setShowLogin] = useState(false);

   const handleProfile=()=>{
    setShowProfile(true);
    setShowLink(false);
    setShowLogin(false);
   }

   const handleLink = ()=>{
      setShowLink(true);
      setShowProfile(false);
      setShowLogin(false);
   }
   
   const handleShowLogin = ()=>{
    setShowLogin(true);
    setShowLink(false);
    setShowProfile(false);
   }
  return (
    <Box width="70%" margin='auto' marginTop="5%" cursor="pointer">
        <Heading fontWeight="semibold" size="md">Account Settings</Heading>
        <Box marginTop="5%">
        <HStack alignItems="flex-start">
            <Box width="30%">
                <Stack spacing={7}>
                    <Heading onClick={handleProfile} size='sm'>Profile</Heading>
                    <Heading size='sm'>Branding</Heading>
                    <Heading onClick={handleLink} size='sm'>My link</Heading>
                    <Heading size='sm'>Phone Number(s)</Heading>
                    <Heading onClick={handleShowLogin} size='sm'>Login</Heading>
                    
                </Stack>
            </Box>
            <Box width="100%">
                {showProfile && (<Profile/>)}
                {showLink && (<Mylink/>)}
                {showLogin && (<AccountLogin/>)}
            </Box>
        </HStack>
        </Box>
    </Box>
  )
}
