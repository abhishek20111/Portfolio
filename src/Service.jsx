import React from 'react'
import './App.css'
import Loding from './assets/loading.gif'
import Responsive from './assets/resposive.gif'
import UI_UX from './assets/uiux.gif'
import Dynamic from './assets/dynamic.gif'

export default function Service() {
  return (
    <div className=" md:mt-2 mt-16 sm:mt-4  h-screen  md:h-[90vh] fullGetScreen">
      <div className='flex flex-col'>
        <div className='m-auto my-5 flex gap-3 flex-col '>
          <p className='text-blue-600 flex justify-center text-2xl font-semibold'>What I Offer? 🤔</p>
          <h2 className='sm:text-4xl justify-center flex font-bold'>My Services</h2>
          <p className='text-gray-400 font-normal   text-center text-xl'>I craft bespoke solutions for your unique needs,<br /> across a range of industries and projects</p>
          <p className='text-gray-900 font-normal mt-2 ml-4 text-center mx-4 text-lg'>❕ Building the future, one line of code at a time ❕</p>
        </div>

        <>
        <div className='m-auto sm:mt-[1%] mt-[3rem] h-[20rem] md:h-auto hover:overflow-auto overflow-hidden w-full flex justify-center flex-row gap-3 flex-wrap'>
            <div className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[23%]  p-3 hover:shadow-none cursor-pointer'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-xl font-bold  text-center'>Fastness</h2>
                <img src={Loding} className='w-[90%] m-auto' alt="Loding Image" />
                <div className=' h-28 hover:overflow-auto overflow-y-hidden text-gray-400 mt-auto flex-wrap items-center font-normal text-justify  text-sm'>Prioritizing lightning-fast load times and lag-free interactions for an engaging and seamless user experience.</div>
              </div>
            </div>

            <div className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[23%]  p-3 hover:shadow-none cursor-pointer'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-xl font-bold  text-center'>Responsive</h2>
                <img src={Responsive} className='w-[90%] m-auto' alt="Loding Image" />
                <div className='text-gray-400 flex-wrap  font-normal text-justify  text-sm'>My layouts are responsive, ensuring seamless functionality across devices of different sizes, providing an optimal user experience.</div>
              </div>
            </div>
            <div className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[23%]  p-3 hover:shadow-none cursor-pointer'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-xl font-bold  text-center'>Intuitive</h2>
                <img src={UI_UX} alt="Loding Image" />
                <div className='text-gray-400 flex-wrap  font-normal text-justify  text-sm'>Passionate about crafting intuitive UX/UI designs, I prioritize user-friendly experiences to ensure seamless navigation and ease of use.</div>
              </div>
            </div>

            <div className='shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] sm:w-[23%]  p-3 hover:shadow-none cursor-pointer'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-xl font-bold  text-center'>Dynamic</h2>
                <img src={Dynamic} alt="Loding Image" />
                <div className='text-gray-400 flex-wrap  font-normal text-justify  text-sm'>Turning static websites into dynamic experiences, I breathe life into pages, creating an immersive digital journey that captivates and resonates.</div>
              </div>
            </div>

          </div>
        </>
      </div>
    </div>
  )
}
