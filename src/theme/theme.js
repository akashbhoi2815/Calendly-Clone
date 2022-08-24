import { extendTheme } from "@chakra-ui/react";
import Button from "./Button"
import Heading from "./Heading";
// import Text from "./Text";
// import FormLabel from "./FormLabel";
const theme = extendTheme({
    components:{
        Heading,
        Button
    }
})

export default theme;