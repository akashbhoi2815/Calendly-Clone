import { Box, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutInit } from '../../../redux/authReducer/action'
export const AccountLogin = () => {
  const navigate = useNavigate();

  const currentUser =  useSelector((store)=>store.authReducer.currentUser)
  const dispatch = useDispatch();
  const handleAuth=()=>{
    if(currentUser){
      dispatch(logoutInit())
    }
  }
  return (
    <Box>
      <br />
        <Stack spacing={10}>
            <HStack>
                <img src="" alt="" />
                <Text>You log in with a Google account.</Text>
            </HStack>
            <HStack alignItems='center' spacing={28}>
                <Box>
                <Heading size="md">Google account</Heading>
                <Text>{currentUser===null ? "":currentUser.email}</Text>
                </Box>
                <Link to="#">
                    <button onClick={handleAuth} color="blue">change login</button>
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
