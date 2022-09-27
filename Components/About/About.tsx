import React from 'react';
import { GridItem, Flex, Grid, Box, Heading, Text, Link, Image, Center} from '@chakra-ui/react';


const About = () => {

    return (
        <Box my="50px">
        <Box textAlign="center">
            <Heading color="white" size="2xl">À Propos</Heading>
        </Box>

        <Flex mt={{base: "100px", md:"0"}} minH="85vh" justify="center" direction="column">

            

            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={10}>


            <GridItem >
                <Center>
                <Image
                borderRadius='md'
                boxSize={{base:'90%', md:'100%'}}
                src='https://rainbowit.net/html/inbio/assets/images/slider/banner-06.png'
                alt='Dan Abramov'
                />
                </Center>
            </GridItem>

            <GridItem colSpan={2} pt={{base: "0", md: "6"}}>

                <Text>
                Je suis un développeur web indépendant de 21 ans basé à Lyon. J'ai commencé à apprendre la programmation par moi-même en 2020, j'ai commencé avec Python puis C++ puis j'ai appris Linux et l'architecture web de base, et enfin je me suis lancé dans la programmation web, j'ai commencé avec HTML, CSS, Javascript et j'ai fait du PHP, après cela j'ai choisi de maîtriser Javascript j'ai donc passé la certification JavaScript Algorithms and Data Structures sur freecodecamp.org que vous pouvez retrouver ici. J'ai construit des projets avec Vanilla Javascript puis, au fur et à mesure que mes projets devenaient plus complexes, je suis passé à React et j'en suis tombé amoureux 😍
                </Text>

                <Flex mt="50px" gap="25px" wrap="wrap">
                    <Link
                    bg="primary.300"
                    color="white"
                    p="3"
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
        </Flex>

        </Box>
    );
};

export default About;