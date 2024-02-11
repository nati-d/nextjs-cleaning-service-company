import Hero from '@/components/Hero'
import React from 'react'
import "./globals.css"
import About from '@/components/About'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
// import Testimonials from '@/components/Testimonials'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Gallery/>
      {/* <Testimonials/> */}
      HomePage
    </div>
  )
}

export default HomePage
