import { Box, Circle, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

import { BsGithub, BsTwitter,BsLinkedin } from 'react-icons/bs';

import {MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <Flex px={{base: "5%", md:"0"}} pb="150px" align="center" direction="column" id="contact">
            <Heading color="white" mb="50px">Contact</Heading>

            <Flex gap="25px" wrap="wrap" justify="center">

                <Link
                    target="_blank"
                    fontSize="45px"
                    href="https://github.com/Kds-JS">
                        <Circle size='100px' boxShadow='dark-lg' bg="primary.300"
                    color="primary.600" _hover={{
                        textDecoration:"none",
                        
                        bg:"primary.900",
                        color:'white'
                    }}>
                            <BsGithub/>
                        </Circle>
                        
                    </Link>

                    <Link
                    target="_blank"
                    fontSize="45px"
                    href="https://www.linkedin.com/in/koudous-salifou-5003a6249/">
                        <Circle size='100px' boxShadow='dark-lg' bg="primary.300"
                    color="primary.600" _hover={{
                        textDecoration:"none",
                        
                        bg:"primary.900",
                        color:'white'
                    }}>
                            <BsLinkedin/>
                        </Circle>
                        
                    </Link>

                    <Link
                    target="_blank"
                    fontSize="45px"
                    href="https://twitter.com/kds_JS">
                        <Circle size='100px' boxShadow='dark-lg' bg="primary.300"
                    color="primary.600" _hover={{
                        textDecoration:"none",
                        
                        bg:"primary.900",
                        color:'white'
                    }}>
                            <BsTwitter/>
                        </Circle>
                        
                    </Link>

                    <Link
                    target="_blank"
                    fontSize="45px"
                    href="mailto:contact@koudous-salifou.com">
                        <Circle size='100px' boxShadow='dark-lg' bg="primary.300"
                    color="primary.600" _hover={{
                        textDecoration:"none",
                        
                        bg:"primary.900",
                        color:'white'
                    }}>
                            <MdEmail/>
                        </Circle>
                        
                    </Link>
            </Flex>

            <Text mt='50px'>
                Designed and build by @kds with NextJS and Chakra-UI
            </Text>
        </Flex>
    );
};

export default Footer;