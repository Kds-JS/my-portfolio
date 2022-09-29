import React, {useState,useEffect} from 'react';
import {Flex, Grid, Box, Heading, Text, Link, Button, useDisclosure} from '@chakra-ui/react';

import { SiGithub } from 'react-icons/si';
import {BsBoxArrowUpRight, BsArrowRightCircleFill } from 'react-icons/bs';
import AllProject from '../AllProject/AllProject';






const Project = () => {
    const [project, setProject] = useState([]);


    useEffect(() => {
        fetchData();
      }, [])
    
      const fetchData = () => {
        fetch('/api/projectapi')
        .then(response => response.json())
        .then(data => setProject(data.project))
      }


    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Box py={{base: "50px", md: "100px"}} id="project">
        <Box textAlign="center">
            <Heading color="white" size="2xl">Project</Heading>
        </Box>

        <Box  py="100px">

            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)'}} columnGap={6} rowGap={10}>

            { project && 

            <>

            <Box h={{base: "400px", lg:"370px"}} bg="secondary.900" p="20px" boxShadow="dark-lg" borderRadius="xl">

                <Text color="white" fontSize="25px" fontWeight="semibold" mb="10px">{project[0].name}</Text>

                <Text fontSize="18px"  h="40%">
                {project[0].description}
                </Text>

                <Flex wrap="wrap" gap="10px" h="30%" mt={{base:"15px", lg:"5px"}}>

                    {project[0].skill.map((skill:string,index:number) => (

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800" key={index}>
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
                    href={project[0].github}>
                        <SiGithub/>
                    </Link>

                    <Link
                    target="_blank"
                    fontSize="25px"
                    _hover={{
                        textDecoration:"none",
                        color:'white'
                    }}
                    href={project[0].live}>
                        <BsBoxArrowUpRight/>
                    </Link>
                    
                </Flex>
            </Box>

            <Box h={{base: "400px", lg:"370px"}} bg="secondary.900" p="20px" boxShadow="dark-lg" borderRadius="xl">

                <Text color="white" fontSize="25px" fontWeight="semibold" mb="10px">{project[1].name}</Text>

                <Text fontSize="18px"  h="40%">
                {project[1].description}
                </Text>

                <Flex wrap="wrap" gap="10px" h="30%" mt={{base:"15px", lg:"5px"}}>

                    {project[1].skill.map((skill:string,index:number) => (

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800" key={index}>
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
                    href={project[1].github}>
                        <SiGithub/>
                    </Link>

                    <Link
                    target="_blank"
                    fontSize="25px"
                    _hover={{
                        textDecoration:"none",
                        color:'white'
                    }}
                    href={project[1].live}>
                        <BsBoxArrowUpRight/>
                    </Link>
                    
                </Flex>
            </Box>

            <Box h={{base: "400px", lg:"370px"}} bg="secondary.900" p="20px" boxShadow="dark-lg" borderRadius="xl">

                <Text color="white" fontSize="25px" fontWeight="semibold" mb="10px">{project[2].name}</Text>

                <Text fontSize="18px"  h="40%">
                {project[2].description}
                </Text>

                <Flex wrap="wrap" gap="10px" h="30%" mt={{base:"15px", lg:"5px"}}>

                    {project[2].skill.map((skill:string,index:number) => (

                    <Box h="max-content" py="5px" px="10px" border="1px" borderRadius="5px" color="primary.800" key={index}>
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
                    href={project[2].github}>
                        <SiGithub/>
                    </Link>

                    <Link
                    target="_blank"
                    fontSize="25px"
                    _hover={{
                        textDecoration:"none",
                        color:'white'
                    }}
                    href={project[2].live}>
                        <BsBoxArrowUpRight/>
                    </Link>
                    
                </Flex>
            </Box>

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
                    Voir Tous
                </Button>
            </Box>
            
        </Box>

        </Box>

            <AllProject onClose={onClose} isOpen={isOpen} project={project}/>
        </>
    );
};

export default Project;


