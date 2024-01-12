import React from 'react'
import './App.css'
import LinkedIn from './assets/linkedin.gif'
import Github from './assets/github_icon.gif'
import Email from './assets/email.gif'

export default function Contact() {
  const data = [
    [LinkedIn, "LinkedIn", 'https://www.linkedin.com/in/abhishek-kushwaha1'],
    [Github, "Github", 'https://github.com/abhishek20111'],
    [Email, "Email", 'mailto:whitecoder1@gmail.com'],
  ]
  return (
    <div className="fullGetScreen h-screen md:h-[90vh]">
      <div className='flex flex-col'>

        <div className='m-auto my-5 flex gap-3 flex-col '>
          <p className='text-blue-600 flex justify-center text-2xl font-semibold'>Contact Me </p>
          <p className='text-gray-400 font-normal   text-center text-xl'> Feel free to reach out for collaborations, <br /> opportunities, or just a tech chat</p>
          <p className='text-gray-900 font-normal mt-2 ml-4 text-center mx-4 text-lg'>❕ Open to exciting opportunities and collaborations. ❕</p>
        </div>

        <div className='m-auto w-[70%] my-5 mt-[5 %] flex gap-3 flex-col'>
          <div className='flex flex-wrap gap-4 justify-between sm:gap-10'>
            {data.map((skill, index) => (
              <div key={index}  className='m-auto'>
                <a href={skill[2]} target='_blank'>
                <img src={skill[0]} className='h-[9rem] ' alt="" />
                  <p className='text-2xl m-3  text-center font-semibold '>{skill[1]}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className=' m-auto my-5 flex gap-3 flex-col  '>
          <p className='text-blue-600 mt-2 sm:mt-12 flex justify-center text-3xl font-semibold'>Thank You 😊</p>
        </div>

      </div>
    </div>
  )
}
