import React from 'react'
import { Link  } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
     <div className="bg-gradient-to-r from-white to-orange-200">
<div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
<div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
<div className="border-t border-gray-200 text-center pt-8">
<h1 className="md:text-9xl text-3xl font-bold text-orange-600">404</h1>
<h1 className="md:text-6xl textxl font-medium py-8 text-gray-700">oops! Page not found</h1>
<p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>

<Link to='/adarshsavalagi.github.io-reactapp/'><button  className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
HOME
</button></Link>
</div>
</div>
</div>
</div>
    </div>
  )
}
