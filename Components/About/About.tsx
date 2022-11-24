import React, { useEffect } from 'react';
import { GridItem, Flex, Grid, Box, Heading, Text, Link, Image, Center, Button} from '@chakra-ui/react';

import { motion} from "framer-motion";


const About = () => {

    const downloadCv = () => {
        
        fetch('cv-kds.pdf').then(response => {
            response.blob().then(blob => {
              
                const fileURL = window.URL.createObjectURL(blob);
 
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'cv-kds.pdf';
                alink.click();
            })
        })
    }


    return (
        <Box py="60px" id="about">
        
        <Box textAlign="center">
            <Heading color="white" size="2xl">Quis suis-je ?</Heading>
        </Box>

        <Box  py="100px">

            

            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={10} id="box" alignItems="center">

            <GridItem>
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    delay: 0.1,
                }}
                viewport={{ once: true}}
                >
                    <Center>
                    <Image 
                    borderRadius='md'
                    boxSize={{base:'90%', md:'100%'}}
                    src='https://i.ibb.co/Km4LQt8/profil-pic.png'
                    alt='profil'
                    />
                    </Center>
                </motion.div>
                </GridItem>
    
                    <GridItem colSpan={2} >

                    <motion.div
                initial={{ opacity: 0, y:50}}
                whileInView={{ opacity: 1, y: 0,
                    transition: {
                      type: "tween",
                    }}}
                transition={{
                    duration: 0.4,
                    delay: 0.1,
                }}
                viewport={{ once: true}}
                >
                        <Box fontSize="20px">
                        <Text >
                        {"Je m'appelle Koudous et je suis développeur web Front-End React JS dépuis le Bénin."}
                        </Text>

                        <Text my="20px">Je suis autodidacte et passionné par les dernières technologies web.</Text>

                        <Text>{"Après un bootcamp de 3 mois où j'ai appris (HTML, CSS, JavaScript, PHP et MySQL), j'ai continué à me former en autodidacte. Je suis toujours intéressé par l'apprentissage de nouvelles technologies et de nouveaux langages."}</Text>
                        </Box>


                        <Flex mt="50px" gap="25px" wrap="wrap" display={'none'}>
                            <Button
                            onClick={downloadCv}
                            colorScheme="purple"
                            py="7"
                            px="10"
                            fontSize="20px"
                            borderRadius="none"
                            w={{base: "100%", md:"50%", lg:"auto"}}
                            textAlign="center"
                            boxShadow='dark-lg'>
                                Telechargez mon  CV
                            </Button>

                            
                        </Flex>

                        </motion.div>
                    </GridItem>
                

            

            </Grid>
        </Box>

        </Box>
    );
};

export default About;
