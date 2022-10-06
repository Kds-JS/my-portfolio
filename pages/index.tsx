
import { Box} from '@chakra-ui/react'
import Head from 'next/head';
import About from '../Components/About/About';
import Profil from '../Components/Profil/Profil';
import Project from '../Components/Project/Project';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import Skills from '../Components/Skills/Skills';


 const Home = () => {
    
  // <img src="https://i.ibb.co/jyz16VK/website.png" alt="website" border="0"></img>

  return (
    <Box px={{base: '4%', sm:'6%', xl: "7%"}}>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="https://i.ibb.co/HF1SgjH/newlogo.png" />
        <meta property="og:title" content="Koudous Salifou  • Développeur React JS" />
     <meta property="og:description" content="je suis développeur web Front-End, voici mon portfolio." />
     <meta property="og:image" content="https://i.ibb.co/jyz16VK/website.png" />
     <meta property="og:url" content="https://koudoussalifou.vercel.app" />
     
     <meta name="twitter:card" content="summary_large_image"></meta>
        
        <title>Koudous Salifou  • Développeur React JS</title>
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



