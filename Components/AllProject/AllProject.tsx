import React, { useEffect, useState } from 'react';



import { SiGithub } from 'react-icons/si';
import {BsBoxArrowUpRight} from 'react-icons/bs';



import { Modal,ModalOverlay,ModalContent,ModalBody,ModalFooter,ModalHeader,ModalCloseButton,Text,Button, Flex, Grid, Box, Link, Heading, Image } from '@chakra-ui/react';

import { motion} from "framer-motion";


type AllProjectProps = {
    onClose: () => void;
    isOpen: boolean;
    project: any;
}




const AllProject = ({onClose,isOpen,project}: AllProjectProps) => {
    // console.log(project);


    
    

    return (
        <Modal onClose={onClose} isOpen={isOpen} size={{base: "full", lg: '2xl', xl:"3xl", '2xl': "5xl"}} isCentered scrollBehavior='inside' >
        <ModalOverlay />
        <ModalContent maxW="800px" bgColor="secondary.800">
          <ModalHeader color="white" fontSize="25px">Mes projets</ModalHeader>
          <ModalCloseButton size="lg" _hover={{color:"white"}}/>
          <ModalBody >
          <Text>

          <Grid templateColumns={{base: 'repeat(1, 1fr)', "2xl": 'repeat(2, 1fr)'}} columnGap={6} rowGap={10}>

            {project && project.map((item: any, index: number) => {
                return (

                    <motion.div key={index}
                    initial={{ opacity: 0, y: 20}}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.1
                    }}
                    viewport={{ once: true}}
                    >
                        <Box bg="secondary.900" p="20px" boxShadow="dark-lg" borderRadius="xl" id="projectCard">

                            <Heading display={{base: "block", md:"none"}} color="white" fontSize="25px" fontWeight="semibold" mb="10px">{item.name}</Heading>

                            <Box fontSize="18px"  h={{base: 'auto', md: "300px"}} mb="30px" overflow="hidden" borderRadius="xl" position="relative">

                                <Image src={item.image} alt="projectImage" h="100%" w="100%" objectFit="cover" boxShadow="dark-lg" borderRadius="xl" display={{base: 'none', md:"block"}}/> 

                                <Flex direction="column" h={{base: "auto", md: "auto"}} position={{base: "static", md: "absolute"}} bottom="0" bg={{base: "none", md: "rgb(0, 0, 0, 0.9)"}} w="100%" p={{base: "0", md: "20px"}} justify={{base: 'flex-start', md: "center"}} id="imgHover">
                                    <Text fontWeight="" color={{base: "primary.600", md: "white"}}>
                                        {item.description}
                                    </Text>
                                    <Flex wrap="wrap" gap="10px" h="30%" mt={{base:"15px", lg:"5px"}} mb="25px" my='10px'>

                                        {item.skill.map((skill:string,index:number) => (

                                        <Box h="max-content" py="5px" px="10px" border="1px" borderColor="primary.900" borderRadius="5px" color="primary.800" key={index}>
                                            {skill}
                                        </Box>

                                        ))}

                                    </Flex>
                                </Flex>
                            </Box>


                            <Flex justify="space-between" mt="15px">
                            <Link
                                target="_blank"
                                fontSize={{base: "35px", md: "25px"}}
                                _hover={{
                                    textDecoration:"none",
                                    color:'white'
                                }}
                                href={item.github}>
                                    <Flex gap="15px" align="center" border={{base: 'none', md: "1px"}} px="15px" borderRadius="md">
                                        <Box display={{base: 'none', md:'block'}}>Github</Box>
                                        <SiGithub/>
                                    </Flex>
                                    
                                </Link>

                                <Link
                                target="_blank"
                                fontSize={{base: "35px", md: "25px"}}
                                _hover={{
                                    textDecoration:"none",
                                    color:'white'
                                }}
                                href={item.live}>
                                    <Flex gap="15px" align="center" border={{base: 'none', md: "1px"}} px="15px" borderRadius="md">
                                        <Box display={{base: 'none', md:'block'}}>Live</Box>
                                        <BsBoxArrowUpRight/>
                                    </Flex>
                                </Link>
                                
                            </Flex>


                        </Box>
            </motion.div>
)
            })}

        
        </Grid>


          </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={onClose} _hover={{bgColor:"secondary.800", color:"white"}}>Fermer</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
};

export default AllProject;