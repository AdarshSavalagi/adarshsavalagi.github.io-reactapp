import React, { useState } from 'react';
import axios from 'axios';
import illustration from '../assets/illustration2.png';
import { useNavigate  } from 'react-router-dom';
export default function LoginRoute() {
  const history = useNavigate();
  const [sign, setSign] = useState(0);
  const [formData, setFormData] = useState({
    'name': '',
    'usn': '',
    'email': ''
  });
  const [errorMessage, setError] = useState(0);
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    sendSignInPostRequest(formData);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    sendRegisterPostRequest(formData);
  };
  const sendSignInPostRequest = (formData) => {
    formData = { ...formData, ['password']: formData.email };
    axios.post('https://alumni.aldoiris.online/api-internship/token/', formData)
      .then((response) => {
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        setLoading(false);
        history('/adarshsavalagi.github.io-reactapp/student-dashboard');
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
        setError(1);
      });
  }
  const sendRegisterPostRequest = (formData) => {
    formData = { ...formData, ['password']: formData.email };
    axios.post('https://alumni.aldoiris.online/api-internship/get-token/', formData)
      .then((response) => {
        setLoading(false);
        if (response.data.message) {
          setError(1);
        } else {
          console.log('hi bro you are logged in');
          localStorage.setItem('access', response.data.access);
          localStorage.setItem('refresh', response.data.refresh);
          history.push({
            pathname:'student-dashboard',
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error:', error);
      });
  }
  return (
    <>
      <div className='container justify-center mx-auto w-4/5 md:w-4/6'>
        <img src={illustration} className='mx-auto' alt="illustration image" />
        <h3 className='text-justify my-3 text-gray-700'>Join our internship program and be a part of a dynamic startup where your innovative ideas will fuel our growth, and your dedication will pave the way for your own success while making a meaningful impact in the world of technology.</h3>
        <h1 className='font-bold text-center text-xl my-4 md:text-3xl'>Register/Login</h1>


        {sign == 0 ? (
          <form onSubmit={handleRegister}>
            <a onClick={() => { setSign(1); }} className="inline-flex items-center m-3 text-orange-600 hover:underline cursor-pointer">
              Already Registered? Sign in
            </a>

            <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 ml-2">Name</label>
            <div className="flex mb-5">
              <span className="inline-flex items-center px-3 text-sm text-gray-900  border border-r-0 border-gray-300 rounded-l-md  dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input type="text" name='name' value={formData.name} onChange={handleOnChange} id="website-admin" pattern='[A-Za-z ]{3,}' className=" rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Your name" />
            </div>
            <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 ml-2">University Serial Number</label>
            <div className="flex mb-5">
              <span className="inline-flex items-center px-3 text-sm text-gray-900  border border-r-0 border-gray-300 rounded-l-md  dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input type="text" name='usn' value={formData.usn} onChange={handleOnChange} id="website-admin" pattern='4[A-Z]{2}\d{2}[A-Z]{2}\d{3}' className=" rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="4SN21AI000" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="  ml-2 block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="text" name='email' value={formData.email} onChange={handleOnChange} id="password" placeholder='your email id' className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
            </div>
            <div className={`${errorMessage == 1 ? '' : 'hidden'} flex items-center p-4 my-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-400 dark:border-red-800`} role="alert">
              <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Error!</span> User already exists
              </div>
            </div>

            <button type="submit" className={`${!loading ? '' : 'hidden'} bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 my-2  text-white`}>Register</button>
            <button disabled type="button" className={`${loading ? '' : 'hidden'} bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 my-2  text-white`}>
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>
              creating user...
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignIn}>
            <a onClick={() => { setSign(0); }} className="inline-flex cursor-pointer items-center m-3 text-orange-600 hover:underline">
              Not Registered yet? Register
            </a>


            <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 ml-2">University Serial Number</label>
            <div className="flex mb-5">
              <span className="inline-flex items-center px-3 text-sm text-gray-900  border border-r-0 border-gray-300 rounded-l-md  dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input type="text" name='usn' value={formData.usn} onChange={handleOnChange} id="website-admin" pattern='4[A-Z]{2}\d{2}[A-Z]{2}\d{3}' className=" rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="4SN21AI000" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="  ml-2 block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="text" name='email' value={formData.email} onChange={handleOnChange} id="password" placeholder='your email id' className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
            </div>
            <div className={`${errorMessage == 1 ? '' : 'hidden'} flex items-center p-4 my-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50  dark:text-red-400 dark:border-red-800`} role="alert">
              <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Error!</span> Usn or mail id is invalid
              </div>
            </div>
            <button type="submit" className={`${!loading ? '' : 'hidden'} bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 my-2  text-white`}>Log in</button>
            <button disabled type="button" className={`${loading ? '' : 'hidden'} bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 my-2  text-white`}>
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>
              Logging...
            </button>
          </form>
        )}
      </div>
    </>
  )
}
