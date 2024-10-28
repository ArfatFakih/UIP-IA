import React from 'react'
import Hero from '../Components/Hero/Hero'
import '../Pages/CSS/Home.css'
import HeroBottom from '../Components/HeroBottom/HeroBottom'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <HeroBottom />
    </div>
  )
}

export default Home