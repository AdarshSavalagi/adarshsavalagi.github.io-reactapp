import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Container1 from './components/container1'
import Footer from './components/footer'
import Contact from './components/contact'
import Techstack from './components/techstack'
import Internship from './components/Internship'
import Services from './components/services'



function App() {
  return (
    <>
    <NavBar/>
    <Container1/>
    <Services/>
    <Internship/>
    <Techstack/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
