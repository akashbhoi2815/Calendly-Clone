import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, unstable_HistoryRouter } from "react-router-dom";
import { signupInit } from "../../../redux/authReducer/action";
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
  import signupstyles from'./Right.module.css'

const SignUp_Section = () => {
  const [state, setState] = useState({
    displayName:"",
    email: "",
    password: "",
    confirmPassword:""
  });
  const currentUser =  useSelector((store)=>store.authReducer.currentUser)
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(()=>{
    if(currentUser){
      navigate('/calendly_homepage')
    }
  },[currentUser,navigate])

  const {displayName, email, password,confirmPassword } = state;

 
  const handleChange = (e) => {
    let {name , value} = e.target;
    setState({...state,[name]:value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      return
    }
    dispatch(signupInit(email,password,displayName))
    setState({email:"",password:"",displayName:"",confirmPassword:""})
   
  };


  return (
    <Box >
      <br />
      <br />
      <br />
      <br />
      <br />
        <Box className={signupstyles.box} bg="white">
       <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <Input
        type="text"
        name="displayName"
        value={displayName}
        placeholder="username"
        onChange={handleChange}
        required
        />
        <br />
        <br />
        <label>Email Address</label>
        <Input
         type="email"
         name="email"
         value={email}
         placeholder="Email"
         onChange={handleChange}
         required
        />
        <br />
        <br />
        <label>Password</label>
        <Input
         type="password"
         name="password"
         value={password}
         placeholder="Enter your password"
         onChange={handleChange}
         minLength="6"
         required
        />
        <br />
        <br />
        <label>Confirm Password</label>
        <Input
         type="password"
         name="confirmPassword"
         value={confirmPassword}
         placeholder="Enter same password"
         onChange={handleChange}
         minLength="6"
         required
        />
        <br />
        <br />
        
        <Input type="submit" value="Sign Up" bg="#006bff" color="white"/>
        
        
       </form>
    </Box>
    </Box>
  )
}

export default SignUp_Section