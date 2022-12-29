import React, { useEffect } from 'react';
import {Flex, Grid, Box, Heading, Text, Image} from '@chakra-ui/react';


import { SiTypescript, SiJavascript, SiSolidity, SiChakraui, SiFirebase, SiChainlink, SiRedux, SiTailwindcss} from 'react-icons/si';
import { GrReactjs, GrNode} from 'react-icons/gr';
import { TbBrandNextjs} from 'react-icons/tb';
import { FaHardHat} from 'react-icons/fa';


const Skills = () => {

    const skills = [
        {
            img: SiJavascript,
            title: "Javascript",
            color: "#F0DB4F"
        },

        {
            img: GrReactjs,
            title: "Reactjs",
            color: "#00D8FF"
        },

        {
            img: TbBrandNextjs,
            title: "Nextjs",
            color: "#FFF"
        },

        {
            img: SiTypescript,
            title: "Typescript",
            color: "#007ACC"
        },

        {
            img: SiRedux,
            title: "Redux",
            color: "#7046B2"
        },

        {
            img: SiTailwindcss,
            title: "Tailwind CSS",
            color: "#38BDF8"
        },

        {
            img: SiChakraui,
            title: "Chakra UI",
            color: "#58C9C8"
        },

        {
            img: GrNode,
            title: "Nodejs",
            color: "#4F9640"
        },

        {
            img: SiSolidity,
            title: "Solidity",
            color: "#616161"
        },
        {
            img: FaHardHat,
            title: "HardHat",
            color: "#F2E500"
        },

        {
            img: SiChainlink,
            title: "Chainlink",
            color: "#2A5ADA"
        },
    ]

    return (
        <Box py="40px" id="skills">
        <Box textAlign="center" >
            <Heading color="white" size="2xl">Skills</Heading>
        </Box>

        <Box  py="100px">

            <Grid templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', xl: 'repeat(6, 1fr)'}} gap={10}>


            {skills.map((item, index) => (
                <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transform="scale(1)"
                transition= "0.3s ease-in-out" _hover={{
                    transform: "scale(1.15)"
                }} key={index}>
                    <Box fontSize="60px" color={item.color}>
                        <item.img/>
                    </Box>
                    <Text fontSize="18px">{item.title}</Text>
                </Flex>
            ))}

            <Flex height="180px" width={{base: "100%", md: "100%"}} bg="secondary.900" flexDirection="column" align="center" py="25px" justify="space-between" borderRadius="md" boxShadow='dark-lg' transform="scale(1)"
                transition= "0.3s ease-in-out" _hover={{
                transform: "scale(1.15)"
            }}>
                <Box>
                    <Image src='https://i.ibb.co/7J6KBF8/ethers-logo.png' alt="ethers-js" h="60px"/>
                </Box>
                <Text fontSize="18px">Ethers JS</Text>
            </Flex>

            
            
            </Grid>
            
        </Box>

        </Box>
    );
};

export default Skills;