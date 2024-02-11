import Hero from '@/components/Hero'
import React from 'react'
import "./globals.css"
import About from '@/components/About'
import Services from '@/components/Services'
import QuoteForm from '@/components/QuoteForm'
import Company from '@/components/Company'
import Testimonials from '@/components/Testimonials'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Company/>
      <About/>
      <Services/>
      <QuoteForm/>
      {/* <Testimonials/> */}
      HomePage
    </div>
  )
}

export default HomePage
