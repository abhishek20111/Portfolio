import React from 'react'
import './App.css'
import my_Image from './assets/myImage.png'

export default function Home() {
    return (
        <div id="home" className=" h-full fullGetScreen">
            <div className="flex md:flex-row flex-col gap-10">
                <div className="flex flex-col gap-y-3 mt-7 md:m-auto ml-[12px] sm:ml-[40px] md:ml-8 ">
                    <div className="text-blue-600  text-lg font-semibold">Hey There 👋 I am</div>
                    <div className="text-4xl  md:text-5xl font-bold">Abhishek Kushwaha</div>
                    <div className=" font-semibold text-xl text-gray-700">Full Stack Developer <span className="text-gray-400">(MERN)</span> </div>
                    <div className="text-gray-400 font-normal text-lg">
                        Crafting Seamless Digital Experiences from Frontend  to Backend.
                        <br />Passionate about coding, problem-solving, and creative finesse.<br />
                    </div>

                    <div className="flex gap-8 mt-5">
                        <div className="text-white p-2 text-lg bg-blue-600 hover:shadow-lg cursor-pointer hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full  px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Contact Me</div>
                        <div className="flex items-center p-2 hover:shadow-xl cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            <span>About Me</span>
                            <span className="material-symbols-outlined ml-2">thumb_up</span>
                        </div>

                    </div>
                </div>

                <div className="">
                    <div className="logo-container">
                        <div className="logo-background" />
                        <img
                            src={my_Image}
                            alt="Logo"
                            className="logo-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
