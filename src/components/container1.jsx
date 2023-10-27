import React,{useState, useEffect} from 'react'
import illustrator from '../assets/illustration1.png';
export default function Container1() {



  const [visibleCards, setVisibleCards] = useState(false);
  useEffect(() => {
   
    const timer = setTimeout(() => {
      setVisibleCards(true);
    }, 300); 

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
    <section id='home' className="text-gray-600 body-font ">

  <div className="container px-5 mb-5  mx-auto flex flex-wrap-reverse justify-center">
   <div className={`md:w- md:my-auto md:w-2/5 home ${  visibleCards? 'visible' : ''}`}>
    <h1 className='text-black font-bold text-4xl mb-2'>Bringing your concpets to life in the digital realm</h1>
    <h3 className='text-lg mb-2'>we, a team of dedicated experts, are commited to transforming dream plans into tangible reality</h3>
    <button className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700  dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mb-3">Let's meet &#x2192;</button>
   </div>
   <div className='md:w-2/5'>
    <img src={illustrator} alt="Illustrator" className={`home ${visibleCards?'visible':''}`} />
   </div>
  </div>
</section>
    </>
  )
}
