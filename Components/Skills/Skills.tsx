import React, { useEffect } from 'react';
import {Flex, Grid, Box, Heading, Text, Image} from '@chakra-ui/react';


import { SiTypescript, SiJavascript, SiSolidity, SiChakraui, SiFirebase, SiChainlink, SiRedux, SiTailwindcss} from 'react-icons/si';
import { GrReactjs, GrNode} from 'react-icons/gr';
import { TbBrandNextjs} from 'react-icons/tb';
import { FaHardHat} from 'react-icons/fa';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    var settings = {
        // dots: false,
        // infinite: false,
        // speed: 500,
        // slidesToShow: 6,
        // slidesToScroll: 1,
        dots: false,
        arrows: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 100,
      cssEase: "linear",
        responsive: [
          {
            breakpoint: 1290,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <Box py="40px" id="skills">
        <Box textAlign="center" >
            <Heading color="white" size="2xl">Skills</Heading>
        </Box>

        <Box  pt="100px" >

            {/* <Grid templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', xl: 'repeat(6, 1fr)'}} gap={10}> */}

            <Slider {...settings} overflow="visible">
            {skills.map((item, index) => (
                <Box height="180px" bg="secondary.900" borderRadius="lg!important" boxShadow="dark-lg!important" transform="scale(1)"
                transition= "0.3s ease-in-out" _hover={{
                    transform: "scale(1.15)",
                    // boxShadow:'dark-lg!important'
                }} key={index} marginX="25px" className='skill-box'>
                    <Box color={item.color} className="box-image">
                        <item.img/>
                    </Box>
                    <Text >{item.title}</Text>
                </Box>
                
            ))}

            <Box height="180px" bg="secondary.900" borderRadius="lg!important" boxShadow="dark-lg!important" transform="scale(1)"
                transition= "0.3s ease-in-out" _hover={{
                    transform: "scale(1.15)"
                }} marginX="25px" className='skill-box'>
                    <Box className="box-image">
                        <Image src='https://i.ibb.co/7J6KBF8/ethers-logo.png' alt="ethers-js" h="60px"/>
                    </Box>
                    <Text >Ethers JS</Text>
                </Box>

            

            
            
            </Slider>
            {/* </Grid> */}
            
        </Box>

        </Box>
    );
};

export default Skills;