import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
          <div className="hero-text">
            <h1>Bida fiber the reliable internet</h1>
            <p>BIDA Fiber, powered by Converge ICT, is a postpaid fiber internet service in the Philippines, known for being an affordable option with a monthly fee of PHP 888. It offers unlimited, high-speed internet with speeds of up to 75 Mbps and allows connection for up to 8 devices. BIDA Fiber aims to provide budget-conscious Filipino households with a reliable and fast internet connection for online learning, entertainment, and other online activities. </p>
            <button className='btn'>Inquire <img src={dark_arrow} alt="" /></button>
          </div>
    </div>
  )
}

export default Hero