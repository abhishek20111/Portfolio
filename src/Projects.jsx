import React, { useState, useEffect } from 'react';
import Card from './Card';
import Fusio from './assets/fusio.jpg'
import Legal from './assets/legal.png'
import Real from './assets/real.png'
import VChat from './assets/vcaht.png'
import Bio from './assets/bio.png'
import GLAthone from './assets/novus.png'

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);


  const data = [
    {
      img: Legal,
      title: "Legal Service Provider",
      description: ['Legal services platform serving as a vital intermediary between legal service providers and clients,facilitating seamless communication and collaboration', 'React.js, Socket.io, Redux Toolkit, Tailwind CSS, MongoDB, Node.js, Express, Jsonwebtoken, bcrypt.'],
      url:'https://legalease.onrender.com/',
      github:'https://github.com/abhishek20111/LegalEase'
    },
    {
      img: Real,
      title: "Onboarding Real Estate",
      description:['Developed a feature-rich website with comprehensive functionalities, including role-based accesscontrol, dynamic form management, and robust CRUD operations on data', 'React.js, Redux Toolkit, MongoDB, Node.js, Express, jsonwebtoken, bcrypt, Tailwind CSS'],
      url:'https://realestate-mljo.onrender.com/',
      github:'https://github.com/abhishek20111/AeroqubeAss1'
    },
    {
      img: Bio,
      title: "Biotech Club Webiste",
      description:['Developed a dynamic and responsive website for the biotech club of my college, showcasing events, resources, and information using the MERN stack','React.js, MongoDB, Node.js, Express, Tailwind CSS'],
      url:'https://realestate-mljo.onrender.com/',
      github:'https://github.com/abhishek20111/Biotech-GLAU'
    },
    {
      img: Fusio,
      title: "E-learning platform",
      description:['Developed FusioTech, a dynamic E-Learning website that facilitates course uploads by instructors and enables students to purchase courses','Employed Tailwind CSS, React.js, bcrpyt, JWT token, Redux Toolkit. Implemented role-based access control'],
      url:'https://realestate-mljo.onrender.com/',
      github:'https://github.com/abhishek20111/FusioTech'
    },
    {
      img: VChat,
      title: "V Chat",
      description:['dynamic fusion of Tinder, Omegle, and WhatsApp functionalities, offering interactive user experiences with secure connections and spontaneous interactions','Socket.io, MERN stack, Redux Toolkit, and WebRTC to ensure seamless real-time communication, robust state management'],
      url:'https://realestate-mljo.onrender.com/',
      github:'https://github.com/abhishek20111/VChat'
    },
    {
      img: GLAthone,
      title: "Novus",
      description:['Developed a versatile spam detection platform with capabilities for fraud number detection, SMS verification, and accurate scrutiny of crypto wallet activities for enhanced security','MERN stack, external APIs for fraud detection, SMS verification, and machine learning models ensure thorough security checks'],
      url:'https://realestate-mljo.onrender.com/',
      github:'https://github.com/abhishek20111/glathone'
    },

  ];

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = Math.min(startIndex + pageSize, data.length);
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Dynamically set pageSize based on screen size
  const updatePageSize = () => {
    if (window.innerWidth < 768) {
      setPageSize(1); // Show 1 card on small screens
    } else if (window.innerWidth < 1024) {
      setPageSize(2); // Show 2 cards on medium screens
    } else {
      setPageSize(3); // Show 3 cards on large screens and above
    }
  };

  // Update pageSize on window resize
  useEffect(() => {
    window.addEventListener('resize', updatePageSize);
    return () => {
      window.removeEventListener('resize', updatePageSize);
    };
  }, []);

  // Initial setup
  useEffect(() => {
    updatePageSize();
  }, []);


  return (
    <div className='md:mt-2 mt-16 sm:mt-4  h-screen  md:h-[90vh] fullGetScreen'>
      <div className='flex flex-col '>
        <div className='m-auto my-5 flex gap-3 flex-col '>
          <p className='text-blue-600 flex justify-center  text-2xl font-semibold'>Recent Works</p>
          {/* <h2 className='sm:text-4xl justify-center flex font-bold'></h2> */}
          <p className='text-gray-400 font-normal   text-center text-xl'>A collection of digital creations that blend simplicity with impact,<br /> making the complex delightfully accessible</p>
        </div>
        <div className='md:mt-2 mt-20 sm:w-[80%] gap-3 flex w-[98%]  mx-auto bg-white'>
          {currentData.map((item, index) => (
            <div key={index} className='p-2'>
              <Card key={item.img} github={item.github} description={item.description} img={item.img} url={item.url} title={item.title} />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4  sm:w-[20%] w-[50%] m-auto">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
            className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
