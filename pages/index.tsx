
import { Box} from '@chakra-ui/react'
import Head from 'next/head';
import About from '../Components/About/About';
import Profil from '../Components/Profil/Profil';
import Project from '../Components/Project/Project';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import Skills from '../Components/Skills/Skills';


 const Home = () => {

  return (
    <Box px={{base: '4%', sm:'6%', xl: "7%"}}>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://i.ibb.co/mymgg9v/brand-2-removebg-preview.png" />
        <meta property="og:title" content="Koudous Salifou  • Développeur Freelance React JS - Solidity" />
     <meta property="og:description" content="je suis développeur web3, voici mon portfolio." />
     <meta property="og:image" content="https://i.ibb.co/6bkh9p7/website.png" />
     <meta property="og:url" content="https://koudous-salifou.com/" />
     
     <meta name="twitter:card" content="summary_large_image"></meta>
     
        <title>Koudous Salifou  • Développeur React JS - Solidity</title>
      </Head>

      <Profil/>
      <About/>
      <Skills/>
      <Project/>
      <ScrollToTop/>
    </Box>
  )
}

export default Home;



