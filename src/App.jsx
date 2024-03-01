import React from 'react'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import './App.css'
import Navbar from './Navbar'
import Service from './Service'
import Projects from './Projects'
import {  Route, Routes } from 'react-router-dom'
import Skills from './Skills'

export default function App() {
  function AppRoutes() {
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
  }
  AppRoutes()
  return (
  <>
    <Navbar />
    <div className="mainapp max-h-screen h-screen md:h-[90dvh]">
      <Home />
      <About />
      <Service/>
      <Projects/>
      <Skills/>
      <Contact />
    </div>
  </>
  )
}
