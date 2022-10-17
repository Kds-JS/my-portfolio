import React from 'react';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Image
} from '@chakra-ui/react';

import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';

import {Link} from "react-scroll";





const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box py="1.5" px={{base: '2%', sm:'7%', lg: "10%"}}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

            <Image
              boxSize={{base:'40px',md:'50px'}}
              objectFit='cover'
              src='https://i.ibb.co/C990FN3/brand-2.png'
              alt='logo'
            />
          

          <HStack
              pl="15px"
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
                  Projets
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
            bg="secondary.800"
            color="white"
            fontSize={isOpen ? "30px" : "30px"}
            _hover={{
                bg:"secondary.800"
            }}
            _focus={{
                bg:"secondary.800"
            }}
            icon={isOpen ? <CgClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
         
        </Flex>

        {isOpen ? (
          <Box pl="15px" mt={6} pb={6} display={{ md: 'none' }}>
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
                activeClass="active" to="skills" spy={true} smooth={true} offset={2} 
                  >
                  Skills
                </Link>
              </Text>

              <Text cursor="pointer" _hover={{color:"primary.500"}}>
                <Link 
                activeClass="active" to="project" spy={true} smooth={false} offset={2}
                  >
                  Projets
                </Link>
              </Text>

              <Text cursor="pointer" _hover={{color:"primary.500"}}>
                <Link 
                activeClass="active" to="contact" spy={true} smooth={true} offset={1} 
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