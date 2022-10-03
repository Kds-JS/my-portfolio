import React, { useEffect } from 'react';
import { GridItem, Flex, Grid, Box, Heading, Text, Link, Image, Center} from '@chakra-ui/react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin';


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);


const About = () => {

    const slideOnLoad = (el:string) => {
        gsap.fromTo(
            el,
            {
                opacity: 0,
                translateX: "50px"
            },
            {
                opacity: 1,
                translateX: "0",
                ease: "power4.inOut",
                delay: 0.4,
                duration: 2,
                scrollTrigger: {
                    trigger: el,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }
   

    useEffect(() => {
        slideOnLoad("#box");
    }, [])



    return (
        <Box py="60px" id="about">
        <Box textAlign="center">
            <Heading color="white" size="2xl">Quis suis-je ?</Heading>
        </Box>

        <Box  py="100px">

            

            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={10} id="box" alignItems="center">

            <GridItem >
                <Center>
                <Image 
                borderRadius='md'
                boxSize={{base:'90%', md:'100%'}}
                src='https://i.ibb.co/HTkp50p/avataaars.png'
                alt='Dan Abramov'
                />
                </Center>
            </GridItem>

            <GridItem colSpan={2} >

                <Box fontSize="20px">
                <Text >
                Je m'appelle Koudous et je suis développeur web Front-End React JS dépuis le Bénin.
                </Text>

                <Text my="20px">Je suis autodidacte et passionné par les dernières technologies web notamment la Blockchain.</Text>

                <Text>Après un bootcamp de 4 mois où j'ai appris (HTML, CSS, Bootstrap, JavaScript, PHP et MySQL), j'ai continué à me former en autodidacte. Je suis toujours intéressé par l'apprentissage de
                nouvelles technologies et de nouveaux langages.</Text>
                </Box>


                <Flex mt="50px" gap="25px" wrap="wrap">
                    <Link
                    bg="primary.900"
                    color="white"
                    py="3"
                    px="6"
                    w={{base: "100%", md:"50%", lg:"auto"}}
                    textAlign="center"
                    boxShadow='dark-lg'
                    transition= "all 0.4s ease" 
                    _hover={{
                        transform: "translateY(-15px)"
                    }}
                    href="#">
                        Telechargez mon  CV
                    </Link>

                    
                </Flex>
                
            </GridItem>

            

            </Grid>
        </Box>

        </Box>
    );
};

export default About;