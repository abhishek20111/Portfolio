import React from 'react'
import './App.css'

export default function About() {
    return (
        <div className=" md:mt-2 mt-16 sm:mt-4  h-screen  md:h-[90vh] fullGetScreen"  >
            <div className= "  flex flex-col md:flex-row sm:pt-2 pt-11 border-b-2 ">
                <div className="m-auto mt-[10%]">
                    <div className="flex flex-col gap-y-3 ml-4">
                        <p className="text-blue-600 flex justify-center md:justify-start text-2xl font-semibold"> About Me&nbsp;👦🏻</p>
                        <p className=" sm:text-3xl text-justify font-bold">Elevating Code,<br /> Enhancing Experiences</p>
                        <p className=" text-gray-400 font-normal text-lg">Passionate about transforming  innovative ideas <br /> into polished, user-centric solutions through <br /> code and creativity.</p>
                    </div>
                </div>

                <div className="m-auto md:h-full">
                    <div className="flex my-[20%] flex-col gap-y-3 m-3 sm:gap-y-6">
                        <p className="text-gray-700  text-3xl font-bold md:text-start  text-center"> Connect With Me&nbsp; 📱</p>
                        <p className=" text-gray-400 font-normal justify-center text-base md:text-lg ">Embark on a conversation and let's explore the possibilities together. <br /> Whether you have questions about my experience, <br /> want to discuss potential collaborations, or just want to connect,  <br /> I'm here. Let's build something incredible, <br /> hand-in-hand with creativity and precision. <br /> Reach out, and let's bring ideas to life!</p>
                        <div className="flex gap-6 md:justify-start  justify-center cursor-pointer">
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/abhishek-kushwaha1/" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>


                            {/* <!-- Github --> */}
                            <a href="https://github.com/abhishek20111" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>

                            {/* email`` */}
                            <a href="mailto:whitecoder1@gmail.com" target="_blank">
                                <span class="material-symbols-outlined">
                                    mail
                                </span>
                            </a>

                            {/* Instgram */}
                            <a href="https://www.instagram.com/abhishek_tech_wtc/" target="_blank">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
