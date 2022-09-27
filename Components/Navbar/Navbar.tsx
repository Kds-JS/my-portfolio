import React from 'react';

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';



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
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                color:"primary.500"
                }}
                href={'#'}>
                Home
            </Link>
            <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                color:"primary.500"
                }}
                href={'#about'}>
                About
            </Link>

            <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                color:"primary.500"
                }}
                href={'#'}>
                Skill
            </Link>

            <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                color:"primary.500"
                }}
                href={'#'}>
                Project
            </Link>

            <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                color:"primary.500"
                }}
                href={'#'}>
                Contact
            </Link>
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
            <Stack as={'nav'} spacing={4}>

            <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                color:"primary.500"
                }}
                href={'#'}>
                Home
            </Link>
            <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                color:"primary.500"
                }}
                href={'#'}>
                About
            </Link>

            <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                color:"primary.500"
                }}
                href={'#'}>
                Skill
            </Link>

            <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                color:"primary.500"
                }}
                href={'#'}>
                Project
            </Link>

            <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                color:"primary.500"
                }}
                href={'#'}>
                Contact
            </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

export default Navbar;