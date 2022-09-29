
import { Box} from '@chakra-ui/react'
import About from '../Components/About/About';
import Profil from '../Components/Profil/Profil';
import Project from '../Components/Project/Project';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';
import Skills from '../Components/Skills/Skills';


 const Home = () => {
  

  return (
    <Box px={{base: '4%', sm:'6%', xl: "7%"}}>
      <Profil/>
      <About/>
      <Skills/>
      <Project/>
      <ScrollToTop/>
    </Box>
  )
}

export default Home;
