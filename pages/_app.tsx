import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Container from '../Components/Container/Container';
import '../styles/globals.scss';

const colors = {
  primary: {
    900: '#6F69EE',
    800: '#8AA3AF',
    700: '#D4E8F7',
    600: '#8AA3AF',
    500: '#29EEFE',
    400: '#1F287A',
    300: '#171941'
  },
  secondary: {
    900: '#01111E',
    800: '#04082E'
  }
}


const styles = {
  global: {
    'html, body': {
      color: 'primary.600',
      lineHeight: 'tall',
      fontSize: '16px',
      backgroundColor: "secondary.800",
      boxSizing: 'border-box'
    },
    a: {
      fontSize: "20px",
      textDecoration: "none"
    }
  },
}

const theme = extendTheme({ colors,styles })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
