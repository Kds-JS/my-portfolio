import { GridItem, Flex, Grid, Box, Heading, Text, Link, Image, Center} from '@chakra-ui/react';


import React from 'react';
import { BsGithub, BsTwitter,BsLinkedin } from 'react-icons/bs';

const Profil = () => {

    return (
        <Flex mt={{base: "100px", md:"0"}} minH="85vh" justify="center" direction="column">
            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={10}>

            <GridItem colSpan={2} >
                <Box color="white" >
                    <Flex gap="15px" align={{base:'flex-start', xl:'center'}}mb="20px" direction={{base:'column', xl:'row'}}>
                    <Heading size="2xl">Hello, Je suis</Heading>
                    <Heading size="2xl" bgGradient='linear(to-bl, primary.900, primary.700)' bgClip="text">Koudous Salifou</Heading>
                    </Flex>
                    <Heading size="3xl">Développeur Front-End</Heading>
                </Box>

                <Text my="25px" fontSize="18px">
                Je suis un développeur web du Bénin. J'aime utiliser les technologies Web pour tout créer, des petits sites Web aux applications hautement interactives pour le Web, les appareils mobiles et les ordinateurs de bureau.
                </Text>

                

                <Flex mt="50px" gap="25px" wrap="wrap">
                    {/* <Link
                    bg="secondary.900"
                    color="primary.900"
                    p="3"
                    position="relative"
                    _hover={{
                        textDecoration:"none",
                        top: "-5px",
                        
                    }}
                    href="#">
                        Telechargez mon  CV
                    </Link> */}

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
                        
                        bg:"primary.400",
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
                        
                        bg:"primary.400",
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
                        
                        bg:"primary.400",
                        color:'white'
                    }}
                    href="#">
                        <BsTwitter/> Twitter
                    </Link>
                </Flex>
                
            </GridItem>

            

            </Grid>
        </Flex>
    );
};

export default Profil;