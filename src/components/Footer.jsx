import {
    Box,
    chakra,
    Container,
    Heading,
    Image,
    Link,
    Select,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
  import {FiYoutube} from "react-icons/fi";
  
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  const SocialButton = ({
      children,
      label,
      href,
    }) => {
      return (
        <chakra.button
          bg={useColorModeValue('white', 'whiteAlpha.100')}
          rounded={'full'}
          w={8}
          h={8}
          cursor={'pointer'}
          as={'a'}
          href={href}
          display={'inline-flex'}
          alignItems={'center'}
          justifyContent={'center'}
          transition={'background 0.3s ease'}
          _hover={{
            color: useColorModeValue('blackAlpha.500', 'whiteAlpha.200'),
          }}>
          <VisuallyHidden>{label}</VisuallyHidden>
          {children}
        </chakra.button>
      );
    };
  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('white', 'white')}
        color={useColorModeValue('gray.700', 'gray.200')}
        >
        <Container as={Stack} 
        maxW={'7xl'} 
        py={10}
        margin={"auto"}
        marginTop={"70px"}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
            spacing={8}
            marginLeft={"30px"}>
            <Stack spacing={6} gap={10}>
              <Box textAlign={"left"} marginBottom={"10px"}>
                <Heading>Easy</Heading>
                <Heading color={"blue.500"}>ahead</Heading>
                <Text fontSize={{base:"lg",sm:"md"}} marginTop={"20px"} width={{base:"130%",sm:"70%"}}>
                We take the work out of connecting with others so you can accomplish more.
                </Text>
              </Box>
              <Stack direction={'row'} marginBottom={"20px"}>
                <Select
                  placeholder={'English'}
                  width={250}
                  bg={useColorModeValue('white', 'whiteAlpha.100')}
                  border={"1px solid black"}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                >
                  <option value='Francis'>Francis</option>
                  <option value='Protegue'>Protegue</option>
                </Select>
              </Stack>
              <Stack direction={'row'} spacing={6} marginBottom={"20px"}>
                <Image src='https://assets-marketing-site.calendly.com/static/AppStore-15f01eefb2013206cc7e26d98fbe95fb.svg' style={{cursor:"pointer"}}/>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1ANbjwIzvXX4YpXZT6Nt3TiRUsMlqrZ3xg&usqp=CAU' width="135px"  style={{borderRadius:"5px",cursor:"pointer"}}/>
              </Stack>
              <Stack direction={'row'} spacing={6} marginBottom={"10px"}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaLinkedinIn />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FiYoutube />
                </SocialButton>
              </Stack>
            </Stack>
            <SimpleGrid
             width={700} 
             marginLeft = {150}
             columns={{ base: 1, sm: 2, md: 3 }}
             spacing={"16"}
             >
            <Stack align={'flex-start'} gap={3}>
              <ListHeader><Heading size={"md"} fontFamily={"revert-layer"}>About</Heading></ListHeader>
              <Link href={'#'}>About Calendly</Link>
              <Link href={'#'}>Contact Sales</Link>
              <Link href={'#'}>Newsrooms</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Security</Link>
            </Stack>
            <Stack align={'flex-start'} gap={3}>
              <ListHeader><Heading size={"md"}>Solutions</Heading></ListHeader>
              <Link href={'#'}>Customer Success</Link>
              <Link href={'#'}>Sales</Link>
              <Link href={'#'}>Recruiting</Link>
              <Link href={'#'}>Information Technology</Link>
              <Link href={'#'}>Marketing</Link>
            </Stack>
            <Stack align={'flex-start'} gap={3}>
              <ListHeader><Heading size={"md"}>Popular Features</Heading></ListHeader>
              <Link href={'#'}>Embeded Calendly</Link>
              <Link href={'#'}>Availability</Link>
              <Link href={'#'}>Sending Notifications</Link>
              <Link href={'#'}>Using Calendly Mobile</Link>
            </Stack>
            <Stack align={'flex-start'} gap={3}>
              <ListHeader><Heading size={"md"}>Support</Heading></ListHeader>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Video Tutorials</Link>
              <Link href={'#'}>Cookies Settings</Link>
            </Stack>
            <Stack align={'flex-start'} gap={3}>
              <ListHeader><Heading size={"md"}>Add-Ons</Heading></ListHeader>
              <Link href={'#'}>Download for Chrome</Link>
              <Link href={'#'}>Download for FireFox</Link>
            </Stack>
            <Stack align={'flex-start'} gap={3}>
              <ListHeader><Heading size={"md"}>Developers</Heading></ListHeader>
              <Link href={'#'}>Developer Tools</Link>
            </Stack>
            </SimpleGrid>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }