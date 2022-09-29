import { Flex, Box, Heading, Text, Link} from '@chakra-ui/react';


import React from 'react';
import { BsGithub, BsTwitter,BsLinkedin } from 'react-icons/bs';

const Profil = () => {

    return (
        <Flex mt={{base: "20px", md:"30px", lg:"40px"}} minH="85vh" justify="center" direction="column" pl={{base: "0", lg:"5%"}} pr={{base: "0", xl:"25%"}}>
            
                <Box color="white" >
                    <Flex gap="15px" align={{base:'flex-start', xl:'center'}}mb="20px" direction={{base:'column', md:'row'}}>
                    <Heading size="xl">Hello 🖐, Je suis</Heading>
                    <Heading size="2xl" bgGradient='linear(to-bl, primary.900, primary.700)' bgClip="text">Koudous Salifou</Heading>
                    </Flex>

                    <Flex gap="15px" align={{base:'flex-start', xl:'center'}}mb="20px" direction={{base:'column', md:'row'}}>
                    <Heading size="3xl">Développeur</Heading>
                    <Heading size="3xl">Front-End</Heading>
                    </Flex>
                    
                </Box>

                <Text my="25px" fontSize="18px" pr={{base:"25px", xl:"0"}}>
                Je suis un développeur web du Bénin. Je suis autodidacte et passionné par les dernières technologies web.
                </Text>

                

                <Flex mt="50px" gap="25px" wrap="wrap">
                    

                    <Link
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    bg="primary.300"
                    color="primary.600"
                    py="3"
                    px="6"
                    borderRadius="full"
                    boxShadow='dark-lg'
                    _hover={{
                        textDecoration:"none",
                        
                        bg:"primary.900",
                        color:'white'
                    }}
                    href="https://github.com/Kds-JS">
                        <BsGithub/> Github
                    </Link>

                    <Link
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    bg="primary.300"
                    color="primary.600"
                    py="3"
                    px="6"
                    borderRadius="full"
                    boxShadow='dark-lg'
                    _hover={{
                        textDecoration:"none",
                        
                        bg:"primary.900",
                        color:'white'
                    }}
                    href="#">
                        <BsLinkedin/> Linkedin
                    </Link>

                    <Link
                    display="flex"
                    alignItems="center"
                    gap="10px"
                    bg="primary.300"
                    color="primary.600"
                    py="3"
                    px="6"
                    borderRadius="full"
                    boxShadow='dark-lg'
                    _hover={{
                        textDecoration:"none",
                        
                        bg:"primary.900",
                        color:'white'
                    }}
                    href="#">
                        <BsTwitter/> Twitter
                    </Link>
                </Flex>
                
            
        </Flex>
    );
};

export default Profil;