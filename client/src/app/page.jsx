import Articles from '@/components/Articles'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Articles />
      <Footer />
    </div>
  )
}

export default Home
