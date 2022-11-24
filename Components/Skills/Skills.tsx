import React, { useEffect } from 'react';
import {Flex, Grid, Box, Heading, Text} from '@chakra-ui/react';


import { SiTypescript, SiJavascript, SiSolidity, SiChakraui, SiFirebase} from 'react-icons/si';
import { GrReactjs, GrNode} from 'react-icons/gr';
import { TbBrandNextjs} from 'react-icons/tb';
import { FaHardHat, FaEthereum} from 'react-icons/fa';

const Skills = () => {

    return (
        <Box py="40px" id="skills">
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
                <Box fontSize="60px" color="#616161">
                    <SiSolidity/>
                </Box>
                <Text fontSize="18px">Solidity</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#F2E500">
                    <FaHardHat/>
                </Box>
                <Text fontSize="18px">Hardhat</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#617BDF">
                    <FaEthereum/>
                </Box>
                <Text fontSize="18px">Ethereum</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#58C9C8">
                    <SiChakraui/>
                </Box>
                <Text fontSize="18px">Chakra UI</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#4F9640">
                    <GrNode/>
                </Box>
                <Text fontSize="18px">Node js</Text>
            </Flex>

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transition= "all 0.4s ease" _hover={{
                transform: "translateY(-15px)"
            }}>
                <Box fontSize="60px" color="#FCCA3F">
                    <SiFirebase/>
                </Box>
                <Text fontSize="18px">Firebase</Text>
            </Flex>
            
            </Grid>
            
        </Box>

        </Box>
    );
};

export default Skills;