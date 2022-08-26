import React from "react";
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

const Account = () => {
  return (
    <Box>
      <Flex>
        <Box></Box>
        <Box>
          <form>
            <label>Name</label>
            <Input
              type="Text"
              placeholder={`${currentUser.display}`}
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
      </Flex>
    </Box>
  );
};

export default Account;
