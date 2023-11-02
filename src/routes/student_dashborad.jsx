import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

export default function StudentDashboard() {
    const [details, setDetails]=useState({});
    const navigate = useNavigate();
    const [downloadLoad, setDownload]=useState(false);
    const [LogIn, setLoggedIn] = useState(false);
    useEffect(() => {
        const requestDashboardData = () => {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            };
            axios.get('https://alumni.aldoiris.online/api-internship/home/', {headers:headers})
                .then((response) => {
                    setDetails(response.data);
                })
                .catch((error) => {
                    navigate('/adarshsavalagi.github.io-reactapp/login');

                });
        }
        if (localStorage.getItem('access') != null) {
            requestDashboardData();
            setLoggedIn(true);
        } else {
            navigate('/adarshsavalagi.github.io-reactapp/login');
        }
    }, []);
    const downloadCertificate=(code)=>{
        setDownload(true);
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        };
        axios.get(`https://alumni.aldoiris.online/api-internship/download-certificate/${code}/`, {headers:headers})
                .then((response) => {
                    const pdfData = response.data.pdf; 

                    const blob = new Blob([atob(pdfData)], { type: 'application/pdf' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${details.name}_${details.course.find(course => course.id === code.slice(-4)).name}.pdf`;
                    a.click();
                    window.URL.revokeObjectURL(url);
                    setDownload(false);
                })
                .catch((error) => {
                    alert('something went wrong!');

                });
    };
    return (
        <>
            {
                LogIn ?
                    (<div className='container md:w-10/12 mx-auto ' >


                        <div className="m-3  bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">

                            <div className="flex flex-col items-center pb-10 mt-3">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Bonnie image" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 ">{details.name}</h5>
                                <h6 className="mb-1 font-medium text-gray-900 ">{details.usn}</h6>
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
                                   
                                   {details.course? details.course.map((element) => (

                                    <li className="py-3 sm:py-4" key={element.id}>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate ">
                                               { element.name}
                                                </p>
                                            </div>

                                            <button  onClick={()=>downloadCertificate(`${details.sid+element.id}`)} className={`${!downloadLoad ? '' : 'hidden'} inline-flex items-center text-sm md:text-xl font-semibold text-gray-900 dark:text-orange-600`}>
                                                Download
                                            </button>
                                            <button disabled type="button" className={`${downloadLoad ? '' : 'hidden'} inline-flex items-center text-sm md:text-xl font-semibold text-gray-900 dark:text-orange-600`}>
              <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>
              downloading...
            </button>
                                        </div>
                                    </li>
)):(<></>)}


                                </ul>
                            </div>
                        </div>

                    </div>
                    ) : (
                        <h2 className=''>please login</h2>
                    )
            }
        </>);
}
