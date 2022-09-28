import React from 'react';
import {Flex, Grid, Box, Heading, Text, Link, Button} from '@chakra-ui/react';

import { SiGithub } from 'react-icons/si';
import {BsBoxArrowUpRight, BsArrowRightCircleFill } from 'react-icons/bs';



const Project = () => {

    return (
        <Box my={{base: "50px", md: "100px"}}>
        <Box textAlign="center">
            <Heading color="white" size="2xl">Project</Heading>
        </Box>

        <Box  py="100px">

            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)'}} columnGap={6} rowGap={10}>


            <Box h={{base: "400px", lg:"370px"}} bg="secondary.900" p="20px" boxShadow="dark-lg" borderRadius="xl">

                <Text color="white" fontSize="25px" fontWeight="semibold" mb="10px">Coin Tracker</Text>

                <Text fontSize="18px"  h="40%">
                Un clone de CoinMarketCap : les informations relatives au marché des cryptomonnaies : cours et prix en temps réel, volumes, graphique etc.
                </Text>

                <Flex wrap="wrap" gap="10px" h="30%" mt={{base:"15px", lg:"5px"}}>
                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        React JS
                    </Box>

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        TypeScript
                    </Box>

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        Chakra UI
                    </Box>

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        Firebase
                    </Box>

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        SASS
                    </Box>
                </Flex>

                <Flex justify="space-between" mt="15px">
                <Link
                    target="_blank"
                    fontSize="25px"
                    _hover={{
                        textDecoration:"none",
                        color:'white'
                    }}
                    href="https://github.com/Kds-JS">
                        <SiGithub/>
                    </Link>

                    <Link
                    target="_blank"
                    fontSize="25px"
                    _hover={{
                        textDecoration:"none",
                        color:'white'
                    }}
                    href="https://kds-coin-tracker.vercel.app/">
                        <BsBoxArrowUpRight/>
                    </Link>
                    
                </Flex>
            </Box>

            <Box h={{base: "400px", lg:"370px"}} bg="secondary.900" p="20px" boxShadow="dark-lg" borderRadius="xl">

                <Text color="white" fontSize="25px" fontWeight="semibold" mb="10px">GOT-Quiz</Text>

                <Text fontSize="18px"  h="40%">
                Un clone de CoinMarketCap : les informations relatives
                </Text>

                <Flex wrap="wrap" gap="10px" h="30%" mt={{base:"15px", lg:"5px"}}>
                  
                    

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        Chakra UI
                    </Box>

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        Firebase
                    </Box>

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        SASS
                    </Box>
                </Flex>

                <Flex justify="space-between" fontSize="25px" mt="15px">
                    <Box>
                        <SiGithub/>
                    </Box>
                    <Box>
                        <BsBoxArrowUpRight/>
                    </Box>
                    
                </Flex>
            </Box>

            <Box h={{base: "400px", lg:"370px"}} bg="secondary.900" p="20px" boxShadow="dark-lg" borderRadius="xl">

                <Text color="white" fontSize="25px" fontWeight="semibold" mb="10px">E-Shop</Text>

                <Text fontSize="18px"  h="40%">
                Un clone de CoinMarketCap : les informations relatives au marché des cryptomonnaies.
                </Text>

                <Flex wrap="wrap" gap="10px" h="30%" mt={{base:"15px", lg:"5px"}}>
                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        React JS
                    </Box>

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        TypeScript
                    </Box>

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        Chakra UI
                    </Box>


                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800">
                        SASS
                    </Box>
                </Flex>

                <Flex justify="space-between" fontSize="25px" mt="15px">
                    <Box>
                        <SiGithub/>
                    </Box>
                    <Box>
                        <BsBoxArrowUpRight/>
                    </Box>
                    
                </Flex>
            </Box>

            
            
            </Grid>

            <Box textAlign={{base:"center", lg:"right"}}>
                <Button
                fontSize="25px"
                _hover={{
                    bg:"primary.900",
                    color: "white"
                }}
                rightIcon={<BsArrowRightCircleFill/>}
                 px="100px" mt="40px" color="black" bg="primary.900" variant='solid' borderRadius="full">
                    Voir Tous
                </Button>
            </Box>
            
        </Box>

        </Box>
    );
};

export default Project;