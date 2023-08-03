import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Box } from '@chakra-ui/react'

const MainTemplate = ({children}) => {
  return (
    <Box pt={20}>
        <Header/>
          {children}
        <Footer/>

    </Box>
  )
}

export default MainTemplate