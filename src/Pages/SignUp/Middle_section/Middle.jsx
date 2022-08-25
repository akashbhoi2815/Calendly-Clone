import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import style from './middle.module.css'

const Middle = () => {
  return (
    <Box
      w={"100%"}
      bgImage="url('https://images.ctfassets.net/k0lk9kiuza3o/41lq28noewrKzn6B9AXh1I/636e53047ab81e34ee6862ff822448f5/Calendly_CTA_bg__1_.png')"
      bgRepeat="no-repeat"
      bgSize="100%"
      size="100%"
      h={"60vh"}
      bgPos="center"
      color={"white"}
      p="85"
    >
      <Box>
        <Heading variant={"ghost"} color="white">
          Ready to transform how you
        </Heading>
        <Heading variant={"ghost"} color="white">
          meet?
        </Heading>
      </Box>
      <br />
      <br />
      <Box>
        <Text className={style.text_middle} >
          Share your Calendly link right from your browser, so you can schedule meetings
        </Text >
        <Text className={style.text_middle}> without the back-and-forth</Text>
      </Box>
      <br />
      
      <Box>
        <Button>Contact Sales</Button>
      </Box>
    </Box>
  );
};

export default Middle;

//https://images.ctfassets.net/k0lk9kiuza3o/41lq28noewrKzn6B9AXh1I/636e53047ab81e34ee6862ff822448f5/Calendly_CTA_bg__1_.png
