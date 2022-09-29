import React from 'react';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import {Link} from "react-scroll";





const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box py="1.5" px={{base: '5%', sm:'7%', lg: "10%"}}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

            <Box color="white" fontSize="2rem">{"<Kds />"}</Box>
          

          <HStack
              as={'nav'}
              spacing='30px'
              display={{ base: 'none', md: 'flex' }}>
              <Text cursor="pointer" _hover={{color:"primary.500"}}>
                <Link 
                activeClass="active" to="about" spy={true} smooth={false} offset={0} 
                  >
                  A propos
                </Link>
              </Text>

              <Text cursor="pointer" _hover={{color:"primary.500"}}>
                <Link 
                activeClass="active" to="skills" spy={true} smooth={false} offset={0} 
                  >
                  Skills
                </Link>
              </Text>

              <Text cursor="pointer" _hover={{color:"primary.500"}}>
                <Link 
                activeClass="active" to="project" spy={true} smooth={false} offset={0}
                  >
                  Projet
                </Link>
              </Text>

              <Text cursor="pointer" _hover={{color:"primary.500"}}>
                <Link 
                activeClass="active" to="contact" spy={true} smooth={false} offset={0} 
                  >
                  Contact
                </Link>
              </Text>
            
            </HStack>

            <IconButton
            size={'md'}
            bg="secondary.800"
            color="white"
            fontSize={isOpen ? "16px" : "25px"}
            _hover={{
                bg:"secondary.800",
                border: "1px"
            }}
            _focus={{
                bg:"secondary.800",
                border: "1px"
            }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
         
        </Flex>

        {isOpen ? (
          <Box mt={6} pb={6} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={6}>

              <Text cursor="pointer" _hover={{color:"primary.500"}}>
                <Link 
                activeClass="active" to="about" spy={true} smooth={false} offset={0} 
                  >
                  A propos
                </Link>
              </Text>

              <Text cursor="pointer" _hover={{color:"primary.500"}}>
                <Link 
                activeClass="active" to="skills" spy={true} smooth={false} offset={0} 
                  >
                  Skills
                </Link>
              </Text>

              <Text cursor="pointer" _hover={{color:"primary.500"}}>
                <Link 
                activeClass="active" to="project" spy={true} smooth={false} offset={0}
                  >
                  Projet
                </Link>
              </Text>

              <Text cursor="pointer" _hover={{color:"primary.500"}}>
                <Link 
                activeClass="active" to="contact" spy={true} smooth={false} offset={0} 
                  >
                  Contact
                </Link>
              </Text>
            
       
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

export default Navbar;