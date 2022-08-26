import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginInit } from "../../../redux/authReducer/action";
import {
  Stack,
  Box,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  Img,
} from "@chakra-ui/react";

import userstyle from './User.module.css'

const AfterLogin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const currentUser = useSelector((store) => store.authReducer.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInit(email, password));
    setState({ email: "", password: "" });
  };

  return (
    <Box w={"30%"} m="auto" className={userstyle.box}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box>
        <Img src="" alt="" />
      </Box>
      <Box textAlign={"center"}>
        <Heading as="h3" size="lg">Welcome back</Heading>
      </Box>
      <br />
      <Box>
        <form onSubmit={handleSubmit}>
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
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <Input type="submit" value="Log In" bg="#486bff" color={"white"} />
          <Box>
            <Text className="signup_lable">
              Don’t have an account?{" "}
              <Link to={"/signup"}>
                <span style={{ color: "#486bff", lineHeight: "25px" }}>
                  {" "}
                  Sign Up
                </span>
              </Link>
            </Text>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AfterLogin;
