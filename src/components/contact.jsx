import React, { useEffect, useState } from 'react'
import location from '../assets/location.svg'
import axios from 'axios';
// axios.defaults.withCredentials = true;



export default function Contact() {
    const sendPostRequest=(formData)=> {
        axios.post('https://alumni.aldoiris.online/api-business/contacts/', formData)
            .then((response) => {
                // Handle the response if needed
                setLoading(false);
                setSuccess(1);
                console.log('Response:', response.data);
            })
            .catch((error) => {
                setSuccess(2);
                setLoading(false);
                console.error('Error:', error);
            });
    }
    const [visible, setVisible] = useState([]);
    useEffect(() => {
        const handleScroll = () => {
            const cardElements = document.querySelectorAll('.contact-items');
            const viewportHeight = window.innerHeight;
            const threshold = viewportHeight * 0.8;
            const newVisibleCards = Array.from(cardElements).map((cardElement) => {
                const cardTop = cardElement.getBoundingClientRect().top;
                return cardTop < threshold;
            });
            setVisible(newVisibleCards);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    });
    // for sending post request 
    const [success, setSuccess]=useState(0);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        'name': '', 'email': '', 'message': ''
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // illi form na send mado logic bartade
        sendPostRequest(formData);
    };
    return (
        <>
            <div className='container mt-5  justify-center mx-auto'>
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-s text-orange-600 tracking-widest font-medium title-font mb-1">Contact us</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Reach our customer service department.</h1>
                </div>
                <div className='grid md:grid-cols-2 text-gray-600 body-font md:m-24'>
                    {/* cards */}
                    <div className="container px-5  mx-auto">
                        <div className="grid md:grid-rows-2 ">
                            <div className={`p-2 contact-items ${visible[0] ? 'visible' : ''}`}>
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow ">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white flex-shrink-0">
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
                                <div className={`p-2 contact-items ${visible[1] ? 'visible' : ''}`}>
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow ">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white flex-shrink-0">
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
                                <div className={`p-2 contact-items ${visible[2] ? 'visible' : ''}`}>
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow ">
                                        <div className="flex items-center mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white flex-shrink-0">
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
                    <div className={`container contact-items ${visible[3] ? 'visible' : ''}`}>
                        <form onSubmit={handleSubmit}>
                            <div className="  flex flex-wrap mx-3 mb-6 ">
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0' >
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                    <input type="text" id="name" name='name' value={formData.name} onChange={handleInputChange} className="appearance-none  w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-orange-500 dark:focus:border-orange-500 " placeholder="Name...." required />
                                </div >
                                <div className='w-full md:w-1/2 px-3'  >
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                    <input type="mail" id="email" value={formData.email} onChange={handleInputChange} name='email' className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-orange-500 dark:focus:border-orange-500  w-full" placeholder="mail@email.com" required />
                                </div>
                            </div>

                            <div className="flex flex-wrap mx-3 mb-6">
                                <div className='w-full px-3' >
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                                    <textarea id="message" name='message' rows="4" value={formData.message} onChange={handleInputChange} className="border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-orange-500 dark:focus:border-orange-500  w-full" placeholder="Write your thoughts here..."></textarea>

{/* alert message start */}
<div className={` ${success==1?'':'hidden'} flex items-center p-4 my-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50  dark:text-green-400 dark:border-green-800`} role="alert">
  <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium">Success!</span> Your response was recieved.
  </div>
</div>


<div className={`${success==2?'':'hidden'} flex items-center p-4 my-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-400 dark:border-red-800`} role="alert">
  <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span className="sr-only">Info</span>
  <div>
    <span className="font-medium">Error!</span> Something went wrong
  </div>
</div>

{/* alert message end */}


                                    <button type="submit" className={`${!loading ? '' : 'hidden'} bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 my-2  text-white`}>Submit</button>
                                    <button disabled type="button" className={`${loading ? '' : 'hidden'} bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 my-2  text-white`}>
                                        <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                        Submitting...
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
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