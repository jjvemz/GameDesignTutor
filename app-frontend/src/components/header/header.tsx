import React from 'react'
import NavButtons from '../buttons/NavigationButtons/navButtons'
import './header.css'
const header = () => {
  return (
    <header className='site-header nes-container is-rounded is-dark'>
      <a href="/" className="logo"> 
        LOGO 
      </a>
      <nav>
        <NavButtons/>
      </nav>
    </header>
  )
}

export default header