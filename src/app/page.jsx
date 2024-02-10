import Hero from '@/components/Hero'
import React from 'react'
import "./globals.css"
import About from '@/components/About'
import Services from '@/components/Services'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      HomePage
    </div>
  )
}

export default HomePage
