import React from 'react'

export default function StudentDashboard() {
    return (
        <div className='container md:w-10/12 mx-auto '>


            <div className="m-3  bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">

                <div className="flex flex-col items-center pb-10 mt-3">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 ">Bonnie Green</h5>
                    <h6 className="mb-1 font-medium text-gray-900 ">4SN21AI000</h6>
                    <span className="text-sm text-gray-500 dark:text-orange-600">Student</span>
                    {/* <div className="flex mt-4 space-x-3 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div> */}
                </div>
            </div>




            <div className=" m-3 p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 ">Course Completed</h5>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-900">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate ">
                                        Machine Learning Bootcamp A to Z
                                    </p>
                                </div>
                                <button className="inline-flex items-center text-sm md:text-xl font-semibold text-gray-900 dark:text-orange-600">
                                    Download
                                </button>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

        </div>
    )
}
