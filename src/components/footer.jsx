import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link to="home" className="flex items-center">
                  <img src={logo} className="h-8 mr-3" alt="iris Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Aldebrans Iris</span>
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Useful links</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}  className="hover:underline">Home</Link>
                      </li>
                      <li>
                          <Link to="services" spy={true} smooth={true} offset={-70} duration={500} className="hover:underline">Services</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="tel:+919206505509" className="hover:underline ">Call us</a>
                      </li>
                      <li>
                          <a href="mailto:infoiris@gmail.com" className="hover:underline">Email us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Iris™</a>. All Rights Reserved.
          </span>
         
      </div>
    </div>
</footer>


  )
}
