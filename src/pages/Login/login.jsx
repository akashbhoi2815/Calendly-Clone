import React from "react";
import styles from "./Login.module.css";
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
import { Link } from "react-router-dom";
export const Login = () => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = new Date();
  let m = today.getMonth();
  let date = months[m] + " " + today.getDate() + "," + today.getFullYear();
  console.log("date: ", date, months[m]);

  return (
    <Box>
      <Box className={styles.nav}>
        <Img
          w={"12rem"}
          m="20px 0px 20px 100px"
          src="https://www.cloudradial.com/wp-content/uploads/elementor/thumbs/calendly-logo-final-pbwp54lw6jgs0k52aozk75jo94dwumled3or1fqj5w.png"
        ></Img>
      </Box>
      <br />
      <br />
      <Stack
        direction={["column", "row"]}
        spacing="24px"
        m={"auto"}
        width="90%"
        textAlign={"start"}
      >
        <Box w="50%" ml={"100"} mt="25px">
          <Box>
            <Heading variant={"solid"} color="#0b3558">
              Welcome back
            </Heading>
            <Heading variant={"solid"} color="#006bff">
              to Calendly
            </Heading>
          </Box>
          <br />
          <br />
          <Text className={styles.text}>
            Log in to your account to get back to your hub for
          </Text>
          <Text className={styles.text}>scheduling meetings.</Text>
          <br />

          <Text className= {styles.email_lable}>Email Address</Text>

          <Input
            htmlSize={29}
            width="auto"
            h="59px"
            className={styles.email_input}
          />
          <Link to="/user_login_page">
            <Button variant={"solid"}>Log In</Button>
          </Link>
          <br />
          <br />
          <br />
          <Box>
            <Text className={styles.signup_lable}>
              Don’t have an account?{" "}
              <Link to="/signup">
                <span style={{ color: "#486bff", lineHeight: "25px" }}>
                  {" "}
                  Sign Up
                </span>
              </Link>
            </Text>
          </Box>
        </Box>

        <Box
          w="50%"
          bgImage="url('https://images.ctfassets.net/k0lk9kiuza3o/59iAyVjqqMENsNFL0v6bl2/07024e4c1f4013d7cf49de86e70e16b5/Bg-Shape.svg')"
          //  bgPos="center"
          bgRepeat="no-repeat"
          bgSize="63%"
          //  size="40%"
          bgPosition={"right"}
          h="70vh"
          bgI
        >
          <Box className={styles.box}>
            <br />
            <Button variant={"normal"}>WHAT'S NEW?</Button>
            <br />
            <br />

            <Heading variant={"outline"}>
              Webinar: Close More Deals with Calendly
            </Heading>
            <br />
            <Text className={styles.text}>
              Tune in to our expert panel on{" "}
              <span className={styles.signup_lable}>{date} at 10am PDT</span> to find
              out how sales teams use Calendly to turn meeting scheduling into a
              competitive advantage.
            </Text>
            <br />

            <Text className={styles.save_seat}>Save your seat {`>`}</Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
