import React, { useEffect, useState } from 'react';



import { SiGithub } from 'react-icons/si';
import {BsBoxArrowUpRight} from 'react-icons/bs';



import { Modal,ModalOverlay,ModalContent,ModalBody,ModalFooter,ModalHeader,ModalCloseButton,Text,Button, Flex, Grid, Box, Link } from '@chakra-ui/react';



type AllProjectProps = {
    onClose: () => void;
    isOpen: boolean;
    project: any;
}




const AllProject = ({onClose,isOpen,project}: AllProjectProps) => {
    console.log(project);
    // const {onClose,isOpen,project} = props;

    
    

    return (
        <Modal onClose={onClose} isOpen={isOpen} size={{base: "full", md:"2xl", lg:"3xl", xl: "4xl"}} isCentered scrollBehavior='inside' >
        <ModalOverlay />
        <ModalContent maxW="800px" bgColor="secondary.800">
          <ModalHeader color="white" fontSize="25px">Projet</ModalHeader>
          <ModalCloseButton size="lg" _hover={{color:"white"}}/>
          <ModalBody >
          <Text>

          <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} columnGap={6} rowGap={10}>

            {project && project.map((item,index) => {
                return (

              
            <Box h={{base: "400px", lg:"370px"}} bg="secondary.900" p="20px" boxShadow="dark-lg" borderRadius="xl" key={index}>

                <Text color="white" fontSize="25px" fontWeight="semibold" mb="10px">{item.name}</Text>

                <Text fontSize="18px"  h="40%">
                {item.description}
                </Text>

                <Flex wrap="wrap" gap="10px" h="30%" mt={{base:"15px", lg:"5px"}}>
                    {item.skill.map((skill:string,index:number) => (

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
                    href={item.github}>
                        <SiGithub/>
                    </Link>

                    <Link
                    target="_blank"
                    fontSize="25px"
                    _hover={{
                        textDecoration:"none",
                        color:'white'
                    }}
                    href={item.live}>
                        <BsBoxArrowUpRight/>
                    </Link>
                    
                </Flex>
            </Box>

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