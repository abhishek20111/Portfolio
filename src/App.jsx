import React from 'react'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import './App.css'
import Navbar from './Navbar'
import Service from './Service'

export default function App() {
  return (<>
    <Navbar />
    <div className="mainapp max-h-screen h-screen md:h-[90vh]">
      <Home />
      <About />
      <Service/>
      <Contact />
    </div>
  </>
  )
}
