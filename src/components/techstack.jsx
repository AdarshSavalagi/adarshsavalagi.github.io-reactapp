import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


// images for tech stack
import django from '../assets/django.png';
import flutter from '../assets/flutter.png';
import html from '../assets/html.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import tensorflow from '../assets/tensorflow.png';


const responsive = {
    0: { items: 3 },
    568: { items: 5},
    1024: { items: 5 },
};

const items = [
    <div className="item w-20  md:w-28 " data-value="1"><img src={django}alt="tech_Stack images" /></div>,
    <div className="item w-20  md:w-28 " data-value="2"><img src={flutter} alt="tech_Stack images" /></div>,
    <div className="item w-20  md:w-28 " data-value="3"><img src={html} alt="tech_Stack images" /></div>,
    <div className="item w-20  md:w-28 " data-value="4"><img src={python} alt="tech_Stack images" /></div>,
    <div className="item w-20  md:w-28 " data-value="5"><img src={react} alt="tech_Stack images" /></div>,
    <div className="item w-20  md:w-28 " data-value="5"><img src={tensorflow} alt="tech_Stack images" /></div>,
];

const Techstack = () => (
    <div className='container justify-center mx-auto'>
        <div className="flex flex-col text-center w-full mb-5">
            <h2 className="text-s text-indigo-500 tracking-widest font-medium title-font mb-1">TechStack</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-3">What we use.</h1>
        </div>
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls={true}
            infinite={true}
            animationType='fadeout'
            autoPlay={true}
            animationDuration={5000}
        /></div>
);

export default Techstack;