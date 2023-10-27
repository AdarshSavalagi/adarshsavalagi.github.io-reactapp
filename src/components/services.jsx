import React, { useEffect, useState } from 'react';
import '../App.css';
// images
import advising from '../assets/services/advising.png';
import analytics from '../assets/services/analytics.png';
import android from '../assets/services/android.png';
import chatbot from '../assets/services/chatbot.png';
import fullstack from '../assets/services/fullstack.png';
import training from '../assets/services/training.png';



// fading


export default function Services() {
    const serviceItem = [
        { icon: fullstack, title: 'Comprehensive Fullstack Web Development Services', data: 'We specialize in delivering Comprehensive Full Stack development service, covering every aspect of your project. From front-end to back-end, we ensure a seamless user experience and robust server-side architecture. Our meticulous design, Coding, and optimization result in high-performing, scalable, and secure web solutions' },
        { icon: android, title: 'Cross-Platform App Development', data: 'Our specialty lies in crafting efficient Cross-Platform Mobile Apps. Using versatile frameworks, We ensure your app works seamlessly across devices and operating systems. We optimize development time and cost, maintaining a consistent user experience. Let us turn your idea into a polished , cross-platform app, extending your reach effectively.' },
        { icon: chatbot, title: 'Intelligent Chatbots and Virtual Assistant Solutions', data: 'Elevate engagement with our Intelligent Chatbot Solutions. We design advanced chatbots for seamless, personalized user interactions. Harnessing AI and NLP, We create dynamic conversational experiances, enhancing your digital presence effectively. Let our chatbots revoltionize your user engagement and streamline interactions.' },
        { icon: analytics, title: 'Data Analytics for frontend Decision-Making', data: 'Unloack actionable insights with our Data Analytics solutions. We analyze and interpret data using cutting-edge tools, revealing valuable patterns and trends. Our expertise guides informed desiciion-making and strategy optimization. Harness the power of data to drive growth and stay ahead in a data-driven world' },
        { icon: advising, title: 'Strategic Consulting and Advisory Expertise', data: 'Experiance strategic guidance with our Consulting and Advisory services. Out seasoned team offers tailored advice, leveraging industry insights to drive your organization forward. From optimzing operations to managing change, we provide actionable strategies aligned with our goals. Trust us as your advisors, ensuring a path to sustainble growth and innovation.' },
        { icon: training, title: 'Cutting-Edge Technology Training', data: 'Empower your team with our Technology Training. We offer specialized courses to equip professionals with the latest skills and knowledge in rapidly evolving tech domains. Our expert trainers ensure practical, hands-on learning experiances, keeping participants updated with cutting-edge advancements. Invest in your teams\'s future and foster innovation with our training programs.' },
    ];

// fading

const [visibleCards, setVisibleCards] = useState([]);
useEffect(() => {
    const handleScroll = () => {
      const cardElements = document.querySelectorAll('.service-card');
      // console.log(cardElements);
      const viewportHeight = window.innerHeight;
      const threshold = viewportHeight * 0.8;

      const newVisibleCards = Array.from(cardElements).map((cardElement) => {
        const cardTop = cardElement.getBoundingClientRect().top;
        return cardTop < threshold;
      });

      setVisibleCards(newVisibleCards);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>
            <div className='mx-auto justify-center align-middle'>
        <h1 className='font-bold text-3xl text-center'>Services</h1>
        <h3 className='text-lg mb-2  text-center'>We Provide a range of services such as...</h3>
        <div className="flex flex-wrap mb-10 md:mx-28 justify-center">
          {serviceItem.map((service, index) => (
            <div
              className={`max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-md dark:border-gray-700 m-4 service-card ${
                visibleCards[index] ? 'visible' : ''
              }`}
              key={index}
              id={`servicecard${index}`}
            >
              <img src={service.icon} alt={service.title} className="w-16 h-17 text-gray-500 dark:text-gray-400 mb-3" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 hite">{service.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">{service.data}</p>
            </div>
          ))}
        </div>
      </div>
        </>
    )
}
