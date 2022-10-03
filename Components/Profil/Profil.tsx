import { Flex, Box, Heading, Text, Link} from '@chakra-ui/react';



import React,{useEffect, useRef} from 'react';
import { BsGithub, BsTwitter,BsLinkedin } from 'react-icons/bs';
import { CgArrowLongDown} from 'react-icons/cg';
import ButtonDown from '../Button/Button';


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin';


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);






const Profil = () => {

    const slideInTop = (el:string, duration:number) => {
        gsap.fromTo(
            el,
            { 
                autoAlpha: 0, 
                yPercent: -25, 
                stagger: 0.1 
            },
            {
                autoAlpha: 1,
                duration: duration,
                ease: "power4.inOut",
                translateY: "0",
                yPercent: 0,
                scrollTrigger: {
                trigger: el,
                once: true,
                },
            }
        )
    }

   

    useEffect(() => {
        slideInTop("#profil1",0.8);
    }, [])

    useEffect(() => {
        slideInTop("#profil2",1);
    }, [])

    useEffect(() => {
        slideInTop("#profil3",2);
    }, [])


    return (
        <Flex mt={{base: "20px", md:"30px", lg:"40px"}} minH="87vh" justify="center" direction="column" pl={{base: "0", lg:"5%"}} pr={{base: "0", xl:"25%"}} position="relative" >


                <ButtonDown>
                    <Box position="absolute" bottom={{base: "0", md:"5%"}} left="48%" h="60px" w="30px" border="2px" borderRadius="15px" cursor="pointer"  fontSize="50px" color="white" display={{base:"none", sm:"flex"}} alignItems="center">
                        <CgArrowLongDown className='scale-up-center'/>
                    </Box>
                </ButtonDown>
                    
            
                <Box color="white" >
                    <Flex gap="15px" align={{base:'flex-start', xl:'center'}}mb="20px" direction={{base:'column', lg:'row'}} id='profil1'>
                    <Heading size="xl" >Hello 🖐, Je suis</Heading>
                    <Heading size="2xl" bgGradient='linear(to-bl, primary.900, primary.700)' bgClip="text">Koudous Salifou</Heading>
                    </Flex>

                    <Flex gap="15px" align={{base:'flex-start', xl:'center'}}mb="20px" direction={{base:'column', md:'row'}} id='profil2'>
                    <Heading size="3xl">Développeur</Heading>
                    <Heading size="3xl">Front-End</Heading>
                    </Flex>
                    
                </Box>

                <Text my="25px" fontSize="20px" pr={{base:"25px", xl:"0"}} id='profil3' >
                Développeur autodidacte, passionné.
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