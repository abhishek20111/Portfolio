import React, { useState } from 'react';
import Close from './assets/close.png'
import GitHub from './assets/GitHub.png'

export default function Card(props) {
    const [open, setOpen] = useState(false);

    const showProjectDetails = () => {
        return (
            <div className="h-screen md:h-[90vh] flex ">
                <div onClick={() => setOpen(!open)} className="bg-black  opacity-20 inset-0 fixed">
                </div>
                <div onClick={(event) => event.stopPropagation()} className="flex flex-col p-2 w-[90%] md:w-[80%] absolute left-12 md:left-[12%] top-[10%] md:h-[75vh]  h-[90vh]">
                    <div className='w-full '><img onClick={() => setOpen(!open)} className=' ml-auto mb-3 h-8' src={Close} alt="" /> </div>
                    <div className='bg-white h-full flex sm:flex-row flex-col p-2' >
                        <div className='w-[50%]  bg-black flex '>
                            <img src={props.img} className='m-auto ' alt="https://v1.tailwindcss.com/img/card-top.jpg" />
                        </div>
                        <div className='flex flex-col w-[50%]'>
                            <h1 className='text-3xl font-semibold mx-auto'>
                                {props.title}
                            </h1>
                            <div className='p-3 flex flex-col gap-3'>
                                <span className='text-xl font-semibold'>Description</span>
                                <p className='text-gray-700 text-lg text-justify'> {props.description[0]?props.description[0]:""}</p>

                                <span className='text-xl  font-semibold text-justify'>Technology</span>
                                <p>{props.description[1]?props.description[1]:""}</p>
                            </div>
                            <div className='mx-auto'>
                                <a href={props.github} target='_blank'><img src={GitHub} className='h-11 w-11' alt="Githib Link" /></a>
                            </div>
                            <div className='mx-auto mt-[8%]'>
                                <a href={props.url} target='_blank' className='w-full'>
                                    <button className='ml-8 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'> 
                                    Demo </button>
                                </a>
                                <h1 className='text-sm text-gray-600 ml-2'>It may take some time to open !</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='w-full' onClick={() => setOpen(!open)}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full border-b-2"
                    src={props.img ? props.img : "https://v1.tailwindcss.com/img/card-top.jpg"}
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-center text-xl mb-2">{props.title}</div>
                </div>
            </div>
            {open && showProjectDetails()}
        </div>
    );
}
