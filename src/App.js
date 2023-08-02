import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import ActorPage from "./pages/ActorPage"
import MoviePage from "./pages/MoviePage"
import PrivacyPage from "./pages/PrivacyPage"



const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/actor" element={<ActorPage/>} />
        <Route path="/movie/:url" element={<MoviePage/>}/>
        <Route path="/privacy" element={<PrivacyPage/>} /> 
      </Routes>
      
    </BrowserRouter>
  
    
    
  )
}

export default App