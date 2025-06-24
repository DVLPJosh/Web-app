import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Inquire from './components/Inquire/Inquire'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR SERVICE' title='How we may assit you?'/>
        <Inquire />
      </div>
      
    </div>
  )
}

export default App