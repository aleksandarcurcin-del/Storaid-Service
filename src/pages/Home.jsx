import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Brands from '../components/Brands'
import Ourservices from '../components/Ourservices'
import Testimonials from '../components/Testimonials'
import Choose from '../components/Choose'
import Pricing from '../components/Pricing'
import Book from '../components/Book'
import Blog from '../components/Blog'
import Subscribe from '../components/Subscribe'



function Home() {
  return (
    <>
      <Hero />
      <About />
      <Brands />
      <Ourservices />
      <Testimonials />
      <Choose />
      <Pricing />
      <Book />
      <Blog />
    </>
  )
}

export default Home