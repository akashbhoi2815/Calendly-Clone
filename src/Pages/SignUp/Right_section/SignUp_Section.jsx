import React from 'react'
import {
    Stack,
    Box,
    Heading,
    Text,
    Input,
    Button,
    Flex,
    Img,
    HStack,
  } from "@chakra-ui/react";
  import './right.css'

const SignUp_Section = () => {
  return (
    <Box>
        <Box className='box' >
       <form>
        <label>First Name</label>
        <Input/>
        <br />
        <br />
        <label>Last Name</label>
        <Input/>
        <br />
        <br />
        <label>Email Adress</label>
        <Input/>
        <br />
        <br />
        <label>company</label>
        <Input/>
        <br />
        <br />
        <label>Job Title</label>
        <Input/>
        <br />
        <br />
        
        <Input type="submit" value="Sign Up" bg="#006bff" color="white"/>
        
        
       </form>
    </Box>
    </Box>
  )
}

export default SignUp_Section