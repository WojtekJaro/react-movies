import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainTemplate = ({children}) => {
  return (
    <div>
        <Header/>
          {children}
        <Footer/>

    </div>
  )
}

export default MainTemplate