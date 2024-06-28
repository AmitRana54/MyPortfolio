import React from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import About from './Components/About/About'
import Hero from  './Components/Hero/Hero'
import Skill from './Components/Skill/Skill'
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/ContactMe/ContactMe'
function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
    
      <Skill/>
    <Projects/>
    <ContactMe/>
    <About/>
     
      
    </>
  )
}

export default App