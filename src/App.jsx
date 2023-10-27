import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Container1 from './components/container1'
import Footer from './components/footer'
import Contact from './components/contact'
import Techstack from './components/techstack'
import Internship from './components/Internship'
import Services from './components/services'


// scrolling
import { Element } from 'react-scroll';
function App() {
  
  return (
    <>
    <NavBar/>
    <Element  name="home" >
    <Container1/>
    </Element>
    <Element  name="services" >
    <Services/>
    </Element>
    <Element  name="internship" >
    <Internship/>
    </Element>
    <Techstack/>
    <Element  name="contact" >
    <Contact/>
    </Element>
    <Footer/>
    </>
  )
}

export default App
