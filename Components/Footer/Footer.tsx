import { Box, Circle, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

import { BsGithub, BsTwitter} from 'react-icons/bs';
import { SiDiscord} from 'react-icons/si';

import {MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <Flex px={{base: "5%", md:"0"}} pb="150px" align="center" direction="column" id="contact">
            <Heading color="white" mb="50px">Contactez Moi</Heading>

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
                    href="https://discord.com/users/842885714190139394">
                        <Circle size='100px' boxShadow='dark-lg' bg="primary.300"
                    color="primary.600" _hover={{
                        textDecoration:"none",
                        
                        bg:"primary.900",
                        color:'white'
                    }}>
                            <SiDiscord/>
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