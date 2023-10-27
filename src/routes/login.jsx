import React from 'react'
import illustration from '../assets/illustration2.png'
export default function LoginRoute() {
  return (
    <>
      <div className='container justify-center mx-auto w-4/5 md:w-4/6'>
        <img src={illustration} className='mx-auto' alt="illustration image" />
        <h3 className='text-justify my-3 text-gray-700'>Join our internship program and be a part of a dynamic startup where your innovative ideas will fuel our growth, and your dedication will pave the way for your own success while making a meaningful impact in the world of technology.</h3>
        <h1 className='font-bold text-center text-xl my-4 md:text-3xl'>Login/Register</h1>
        <form >

          <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 ml-2">University Serial Number</label>
          <div className="flex mb-5">
            <span className="inline-flex items-center px-3 text-sm text-gray-900  border border-r-0 border-gray-300 rounded-l-md  dark:text-gray-400 dark:border-gray-600">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input type="text" id="website-admin" className=" rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="4SN21AI000" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="  ml-2 block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
            <input type="password" id="password" className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-orange-500 focus:border-orange-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
          </div>
          <button type="submit" className="mb-5 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login </button>

        </form>
      </div>
    </>
  )
}
