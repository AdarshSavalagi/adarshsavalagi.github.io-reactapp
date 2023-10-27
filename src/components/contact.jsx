import React,{useEffect, useState} from 'react'
import location from '../assets/location.svg'
export default function Contact() {
    const [visible ,setVisible]=useState([]);
    useEffect(()=>{
        const handleScroll = ()=>{
            const cardElements = document.querySelectorAll('.contact-items');
            const viewportHeight = window.innerHeight;
            const threshold=viewportHeight*0.8;
            const newVisibleCards=Array.from(cardElements).map((cardElement)=>{
                const cardTop = cardElement.getBoundingClientRect().top;
                return cardTop<threshold;
            });
            setVisible(newVisibleCards);
        };
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        };
    });
    return (
        <><section id='contact '>
            <div className='container mt-5  justify-center mx-auto'>
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-s text-indigo-500 tracking-widest font-medium title-font mb-1">Contact us</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Reach our customer service department.</h1>
                </div>
                <div className='grid md:grid-cols-2 text-gray-600 body-font md:m-24'>
                    {/* cards */}
                    <div className="container px-5  mx-auto">
                        <div className="grid md:grid-rows-2 ">
                            <div className={`p-2 contact-items ${visible[0]?'visible':''}`}>
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow ">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                            <img src={location} className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Our place of business is as stated</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">N M C Main Road Hosamane Bhadravathi, Karnataka, 577301.</p>

                                    </div>
                                </div>
                            </div>
                            <div className='md:columns-2'>
                                <div className={`p-2 contact-items ${visible[1]?'visible':''}`}>
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow ">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <svg fill='white' height="24" viewBox="0 -960 960 960" width="21"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                                            </div>
                                            <h2 className="text-gray-900 text-lg title-font font-medium">Email our team.</h2>
                                        </div>
                                        <div >
                                            <a href='mailto:infoiris@gmail.com' className="leading-relaxed text-base">infoiris@gmail.com</a><br />
                                            <a href='mailto:madhuitaao@gmail.com' className="leading-relaxed text-base">madhuitaao@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={`p-2 contact-items ${visible[2]?'visible':''}`}>
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow ">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <svg fill='white' height="20" viewBox="0 -960 960 960" width="24"><path d="M480-40q-33 0-56.5-23.5T400-120q0-33 23.5-56.5T480-200q33 0 56.5 23.5T560-120q0 33-23.5 56.5T480-40ZM240-760q-33 0-56.5-23.5T160-840q0-33 23.5-56.5T240-920q33 0 56.5 23.5T320-840q0 33-23.5 56.5T240-760Zm0 240q-33 0-56.5-23.5T160-600q0-33 23.5-56.5T240-680q33 0 56.5 23.5T320-600q0 33-23.5 56.5T240-520Zm0 240q-33 0-56.5-23.5T160-360q0-33 23.5-56.5T240-440q33 0 56.5 23.5T320-360q0 33-23.5 56.5T240-280Zm480-480q-33 0-56.5-23.5T640-840q0-33 23.5-56.5T720-920q33 0 56.5 23.5T800-840q0 33-23.5 56.5T720-760ZM480-280q-33 0-56.5-23.5T400-360q0-33 23.5-56.5T480-440q33 0 56.5 23.5T560-360q0 33-23.5 56.5T480-280Zm240 0q-33 0-56.5-23.5T640-360q0-33 23.5-56.5T720-440q33 0 56.5 23.5T800-360q0 33-23.5 56.5T720-280Zm0-240q-33 0-56.5-23.5T640-600q0-33 23.5-56.5T720-680q33 0 56.5 23.5T800-600q0 33-23.5 56.5T720-520Zm-240 0q-33 0-56.5-23.5T400-600q0-33 23.5-56.5T480-680q33 0 56.5 23.5T560-600q0 33-23.5 56.5T480-520Zm0-240q-33 0-56.5-23.5T400-840q0-33 23.5-56.5T480-920q33 0 56.5 23.5T560-840q0 33-23.5 56.5T480-760Z" /></svg>
                                            </div>
                                            <h2 className="text-gray-900 text-lg title-font font-medium">Call us</h2>
                                        </div>
                                        <div className="flex-grow">
                                            <a href='tel:+917975078770' className="leading-relaxed text-base">+91-7975078770</a><br />
                                            <a href='tel:+917019332058' className="leading-relaxed text-base">+91-7019332058</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <div className={`container contact-items ${visible[3]?'visible':''}`}>
                        <form>
                            <div className="  flex flex-wrap mx-3 mb-6 ">
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0' >
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                    <input type="text" id="name" className="appearance-none  w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Name...." required />
                                </div >
                                <div className='w-full md:w-1/2 px-3'  >
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input type="mail" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-full" placeholder="mail@email.com" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap mx-3 mb-6">
                                <div className='w-full px-3' >
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                    <textarea id="message" rows="4" className="border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-full" placeholder="Write your thoughts here..."></textarea>
                                    <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
            </section>
        </>
    )
}
{/* <form className='lg:hidden'>
                        <div className="  container grid gap-1 mb-6 md:grid-cols-2">
                            <div className='mx-auto w-11/12' >
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                                <input type="text" id="name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" placeholder="Name...." required />
                            </div >
                            <div className='mx-auto w-11/12'  >
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input type="mail" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-full" placeholder="mail@email.com" required />
                            </div>
                        </div>
                        <div className='container mx-auto w-11/12 md:mx-5' >
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea id="message" rows="4" className="border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-full" placeholder="Write your thoughts here..."></textarea>
                            <button type="submit" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2">Submit</button>
                        </div>
                    </form> */}