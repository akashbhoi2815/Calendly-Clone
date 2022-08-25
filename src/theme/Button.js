import { transform } from "@chakra-ui/react";

const Button = {
    
    variants: {
      solid: {
        fontFamily: "Gilroy - 600",
        fontSize: "18px",
        fontWeight: "600",
        lineHeight:"29px",
        textAlign:"center",
        transform:"translateX(-5px)",
        bgColor:"#006bff",
        color:"white",
        height:"59px",
        marginBottom:"4px"

        
        
        
      },
      outline: {
        fontFamily: "Montserrat - 700",
        fontSize: "67px",
        fontWeight: "700",
        lineHeight:"81px",
        
        
      },
      ghost: {
        fontFamily: "DM Sans - 600",
        fontSize: "26px",
        fontWeight: "600",
        fontStyle:"italic"
        
      },
      smooth: {
        fontFamily: "DM Sans - 600",
        fontSize: "22px",
        fontWeight: "600",
        fontStyle:"normal"
        
      },
      normal: {
        fontFamily: "Gilroy - 600",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight:"19px",
        color:"#006bff",
        fontStyle:"normal"

        
      },
      
    },
  };
  export default Button;