import React from 'react';
import { GridItem, Flex, Grid, Box, Heading, Text, Link, Image, Center} from '@chakra-ui/react';


const About = () => {

    return (
        <Box my="60px">
        <Box textAlign="center">
            <Heading color="white" size="2xl">À Propos</Heading>
        </Box>

        <Box  py="100px">

            

            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={10}>


            <GridItem >
                <Center>
                <Image
                borderRadius='md'
                boxSize={{base:'90%', md:'100%'}}
                src='https://rainbowit.net/html/inbio/assets/images/slider/banner-06.png'
                alt='Dan Abramov'
                />
                </Center>
            </GridItem>

            <GridItem colSpan={2} pt={{base: "0", md: "6"}}>

                <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nam animi nihil. Distinctio repellendus, expedita voluptas doloribus pariatur quas maiores! Nulla, sapiente? Mollitia doloremque praesentium, quo autem ullam rem eveniet!
                Temporibus eligendi laudantium facilis corrupti, labore laborum similique cumque expedita, alias laboriosam sed tempore molestias. Repellendus accusantium, sapiente ut cum cumque vel, quae cupiditate quod id harum recusandae minus assumenda.
                Velit hic possimus porro repellendus nihil necessitatibus saepe vel ipsa minima? Iusto sint eaque nobis autem vitae reprehenderit architecto nesciunt mollitia cum, impedit natus possimus, repudiandae porro nisi corporis aperiam?
                </Text>

                <Flex mt="50px" gap="25px" wrap="wrap">
                    <Link
                    bg="primary.300"
                    color="white"
                    p="3"
                    boxShadow='dark-lg'
                    transition= "all 0.4s ease" 
                    _hover={{
                        transform: "translateY(-15px)"
                    }}
                    href="#">
                        Telechargez mon  CV
                    </Link>

                    
                </Flex>
                
            </GridItem>

            

            </Grid>
        </Box>

        </Box>
    );
};

export default About;