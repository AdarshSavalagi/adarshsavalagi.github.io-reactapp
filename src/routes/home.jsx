import '../App.css'
import Container1 from '../components/container1'
import Contact from '../components/contact'
import Techstack from '../components/techstack'
import Internship from '../components/Internship'
import Services from '../components/services'
import { Element } from 'react-scroll';

import React from 'react'

export default function HomeRoute() {
    return (
        <>
            <Element name="home" >
                <Container1 />
            </Element>
            <Element name="services" >
                <Services />
            </Element>
            <Element name="internship" >
                <Internship />
            </Element>
            <Techstack />
            <Element name="contact" >
                <Contact />
            </Element>

        </>
    );
}
