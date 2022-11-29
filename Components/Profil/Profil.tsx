import { Flex, Box, Heading, Text, Link} from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

import React from 'react';
import { BsGithub, BsTwitter,BsLinkedin } from 'react-icons/bs';
import { CgArrowLongDown} from 'react-icons/cg';
import ButtonDown from '../Button/Button';

import { motion} from "framer-motion";



const Profil = () => {

    return (
        <Flex mt={{base: "20px", md:"30px", lg:"40px"}} minH="87vh" justify="center" direction="column" pl={{base: "0", lg:"5%"}} pr={{base: "0", xl:"25%"}} position="relative" >


                <ButtonDown>
                    <Box position="absolute" bottom={{base: "0", md:"5%"}} left="48%" h="60px" w="30px" border="2px" borderRadius="15px" cursor="pointer"  fontSize="50px" color="white" display={{base:"none", sm:"flex"}} alignItems="center">
                        <CgArrowLongDown className='scale-up-center'/>
                    </Box>
                </ButtonDown>
                    
            
                <Box color="white" >
                <motion.div
                initial={{opacity: 0,
                    x: 10,
                    y: -20,
                    }}
                whileInView={{ opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 100,
                      }}}
                      viewport={{ once: true}}
                >
                    <Flex gap="15px" align={{base:'flex-start', xl:'center'}}mb="20px" direction={{base:'column', lg:'row'}} id='profil1'>
                    <Heading size="xl" >Hello 🖐, Je suis</Heading>
                    <Heading size="2xl" bgGradient='linear(to-bl, primary.900, primary.700)' bgClip="text">Koudous Salifou</Heading>
                    </Flex>
                    </motion.div>
                    
                    <motion.div
                initial={{opacity: 0,
                    x: -20,
                    y: 10,
                    }}
                whileInView={{ opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                      }}}
                      viewport={{ once: true}}
                >
                    <Flex gap="15px" align={{base:'flex-start', md:'center'}}mb="20px" direction={{base:'column', md:'row'}} id='profil2' overflow="hidden" className='dynamic-txts'>
                    <Box fontWeight="600" fontSize={{base: '45px', md:"60px"}} color="white">Développeur</Box>
                    <Box fontWeight="600" fontSize={{base: '45px', md:"60px"}}  color="primary.900">
                        <Typewriter
                        options={{
                            strings: ['Blockchain','Web3', 'Front-End', 'Solidity'],
                            autoStart: true,
                            delay: 150,
                            loop: true,
                        }}
                        />
                    </Box>
                    </Flex>

                    </motion.div>
                    
                </Box>
                    
                <motion.div
                initial={{opacity: 0,
                    y: 20
                    }}
                whileInView={{ opacity: 1,
                    y: 0,
                    transition: {
                        type: "just"
                      }}}
                    viewport={{ once: true}}
                >
                <Text my="25px" fontSize="20px" pr={{base:"25px", xl:"0"}} id='profil3' >
                Développeur autodidacte, passionné.
                </Text>
                </motion.div>
                

                <Flex mt="50px" gap="25px" wrap="wrap">
                    

                    <Link
                    target="_blank"
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
                    target="_blank"
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
                    href="https://www.linkedin.com/in/koudous-salifou-5003a6249/">
                        <BsLinkedin/> Linkedin
                    </Link>

                    <Link
                    target="_blank"
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
                    href="https://twitter.com/kds_JS">
                        <BsTwitter/> Twitter
                    </Link>
                </Flex>
                
            
        </Flex>
    );
};

export default Profil;