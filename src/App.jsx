import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Modules from './components/Modules'
import CourseDetails from './components/CourseDetails'
import Certificate from './components/Certificate'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Modules />
      <CourseDetails />
      <Certificate />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  )
}

export default App