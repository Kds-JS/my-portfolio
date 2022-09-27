
import { Box} from '@chakra-ui/react'
import About from '../Components/About/About';
import Profil from '../Components/Profil/Profil';
import Skills from '../Components/Skills/Skills';


 const Home = () => {
  

  return (
    <Box px={{base: '5%', sm:'7%', lg: "10%"}}>
      <Profil/>
      <About/>
      <Skills/>
    </Box>
  )
}

export default Home;
