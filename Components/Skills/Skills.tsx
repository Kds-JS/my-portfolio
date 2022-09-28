import React from 'react';
import {Flex, Grid, Box, Heading, Text} from '@chakra-ui/react';


import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiChakraui, SiFirebase, SiSass, SiGithub} from 'react-icons/si';
import { GrReactjs} from 'react-icons/gr';
import { TbBrandNextjs} from 'react-icons/tb';
import { BsBootstrapFill} from 'react-icons/bs';

const Skills = () => {

    return (
        <Box my="40px">
        <Box textAlign="center" >
            <Heading color="white" size="2xl">Skills</Heading>
        </Box>

        <Box  py="100px">

            <Grid templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', xl: 'repeat(6, 1fr)'}} gap={10}>


            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }} >
                <Box fontSize="60px" color="#F0DB4F">
                    <SiJavascript/>
                </Box>
                <Text fontSize="18px">JavaScript</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }} >
                <Box fontSize="60px" color="#00D8FF">
                    <GrReactjs/>
                </Box>
                <Text fontSize="18px">React JS</Text>
            </Flex>
            
            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="white">
                    <TbBrandNextjs/>
                </Box>
                <Text fontSize="18px">Next JS</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#007ACC">
                    <SiTypescript/>
                </Box>
                <Text fontSize="18px">TypeScript</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#FC490B">
                    <SiHtml5/>
                </Box>
                <Text fontSize="18px">HTML</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#E0ABC6">
                    <SiSass/>
                </Box>
                <Text fontSize="18px">SASS</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#214CE5">
                    <SiCss3/>
                </Box>
                <Text fontSize="18px">CSS</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#58C9C8">
                    <SiChakraui/>
                </Box>
                <Text fontSize="18px">Chakra Ui</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#722DF9">
                    <BsBootstrapFill/>
                </Box>
                <Text fontSize="18px">Bootstrap</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#FCCA3F">
                    <SiFirebase/>
                </Box>
                <Text fontSize="18px">Firebase</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="white">
                    <SiGithub/>
                </Box>
                <Text fontSize="18px">Github</Text>
            </Flex>
            
            </Grid>
            
        </Box>

        </Box>
    );
};

export default Skills;