import React, {useState,useEffect} from 'react';
import {Flex, Grid, Box, Heading, Text, Link, Button, useDisclosure, Image} from '@chakra-ui/react';


import { SiGithub } from 'react-icons/si';
import {BsBoxArrowUpRight, BsArrowRightCircleFill } from 'react-icons/bs';
import AllProject from '../AllProject/AllProject';


import { motion} from "framer-motion";
import { data } from '../../data/data';

const Project = () => {
    const projectArray = [1,2,3,4];
    const project = data.project;
    


    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <>
        <Box py={{base: "50px", md: "100px"}} id="project">
        <Box textAlign="center">
            <Heading color="white" size="2xl" id="title"> Mes Projets</Heading>
        </Box>

        <Box  py="100px" id="projectbox">

            <Grid templateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)'}} columnGap={10} rowGap={10} >

            { project.length != 0 && 

            <>

            {projectArray.map ((item: number, index: number) => (

            
            
            <motion.div
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y:0}}
            transition={{
                duration: 0.5,
                delay: 0.2
            }}
            key={index}
            >
            <Box bg="secondary.900" p="20px" boxShadow="dark-lg" borderRadius="xl" id="projectCard">

                <Heading color="white" fontSize="25px" fontWeight="semibold" mb="10px">{project[item].name}</Heading>

                <Box fontSize="18px"  h={{base: 'auto', md: "300px"}} mb="30px" overflow="hidden" borderRadius="xl" position="relative">

                    <Image src={project[item].image} alt="projectImage" h="100%" w="100%" objectFit="cover" boxShadow="dark-lg" borderRadius="xl" display={{base: 'none', md:"block"}}/> 

                    <Flex h={{base: "auto", md: "50%"}} position={{base: "static", md: "absolute"}} bottom="0" bg={{base: "none", md: "rgb(0, 0, 0, 0.7)"}} w="100%" p={{base: "0", md: "20px"}} align={{base: 'flex-start', md: "center"}} justify={{base: 'flex-start', md: "center"}} id="imgHover">
                        <Text fontWeight="" color={{base: "primary.600", md: "white"}}>
                            {project[item].description}
                        </Text>
                    </Flex>
                </Box>

                <Flex wrap="wrap" gap="10px" h="30%" mt={{base:"15px", lg:"5px"}} mb="25px">

                    {project[item].skill.map((skill:string,index:number) => (

                    <Box h="max-content" py="5px" px="10px" border="1px" borderColor="primary.900" borderRadius="5px" color="primary.800" key={index}>
                        {skill}
                    </Box>

                    ))}

                </Flex>

                <Flex justify="space-between" mt="15px">
                <Link
                    target="_blank"
                    fontSize="25px"
                    _hover={{
                        textDecoration:"none",
                        color:'white'
                    }}
                    href={project[item].github}>
                        <Flex gap="15px" align="center" border={{base: 'none', md: "1px"}} px="15px" borderRadius="md">
                            <Box display={{base: 'none', md:'block'}}>Github</Box>
                            <SiGithub/>
                        </Flex>
                        
                    </Link>

                    <Link
                    target="_blank"
                    fontSize="25px"
                    _hover={{
                        textDecoration:"none",
                        color:'white'
                    }}
                    href={project[item].live}>
                        <Flex gap="15px" align="center" border={{base: 'none', md: "1px"}} px="15px" borderRadius="md">
                            <Box display={{base: 'none', md:'block'}}>Live</Box>
                            <BsBoxArrowUpRight/>
                        </Flex>
                    </Link>
                    
                </Flex>

                
            </Box>

            </motion.div>

            ))}

            </>

            }

            </Grid>

            <Box textAlign={{base:"center", lg:"right"}}>
                <Button
                onClick={() => onOpen()}
                fontSize="25px"
                _hover={{
                    bg:"primary.900",
                    color: "white"
                }}
                rightIcon={<BsArrowRightCircleFill/>}
                 px="100px" mt="40px" color="black" bg="primary.900" variant='solid' borderRadius="full">
                    Voir Plus
                </Button>
            </Box>
            
        </Box>

        </Box>

            <AllProject onClose={onClose} isOpen={isOpen} project={project}/>
        </>
    );
};

export default Project;


