import React from 'react'
import '../NavBar.css'
import logo from '../../assets/logo.png'



const NavBar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
          <li><>Home</></li>
          <li><>About us</></li>
          <li><>Inquries</></li>
          <li><button className='btn'>Customer service</button></li>
        </ul>
    </nav>
  )
}

export default NavBar