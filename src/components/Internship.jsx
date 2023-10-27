import React, { useState, useEffect } from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from "react-router-dom";
import ml from '../assets/internship/ml.jpg';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 2 },
};



export default function Internship() {


    const [visibleCards, setVisibleCards] = useState([]);
    useEffect(() => {
        const handleScroll = () => {
            const cardElements = document.querySelectorAll('.internship-card');
            // console.log(cardElements);
            const viewportHeight = window.innerHeight;
            const threshold = viewportHeight * 1.0;

            const newVisibleCards = Array.from(cardElements).map((cardElement) => {
                const cardTop = cardElement.getBoundingClientRect().top;
                return cardTop < threshold;
            });

            setVisibleCards(newVisibleCards);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    const internshipItems = [
        { image: ml, title: 'Machine Learning Bootcamp 2023-24', description: ' This is my big internship description' },
        // {image:ml,title:'Machine Learning Bootcamp 2023-24',description:' this si my big intership description'},
        // {image:ml,title:'Machine Learning Bootcamp 2023-24',description:' this si my big intership description'},
    ];


    const items = internshipItems.map((item, index) => (



        <div key={index} className={` mb-3 mx-3 flex flex-col text-gray-700 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 internship-card  ${visibleCards[index] ? 'visible' : ''}`}>
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.image} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{item.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                <Link to="login">   <button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mb-3">Register now &#x2192;</button></Link>
            </div>
        </div>
    ));

    return (
        <>
            <div className='container justify-center mx-auto'>
                <div className="flex flex-col text-center w-full mb-5">
                    <h2 className="text-s text-orange-600 tracking-widest font-medium title-font mb-1">Actualize your dream career</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-3">Top trends on Iris</h1>
                </div>
                <div className={`flex flex-wrap  mx-auto justify-center `}>
                    {items}
                </div>
            </div>
        </>
    )
}
