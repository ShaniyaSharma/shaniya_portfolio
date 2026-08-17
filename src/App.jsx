import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact'
// import About from './components/About'
import Project from './components/Project'
import Experience from './components/Experience'
// import { DeprecatedLayoutGroupContext } from 'framer-motion'

export default function() {
  return (
    <div>
    <Hero/>
    <Navbar/>
    {/* <About/> */}
    <Contact/>
    <Skills/>
    <Project/>
    <Experience/>
    </div>

  )
}
