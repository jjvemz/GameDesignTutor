import React from 'react'
import NavButtons from '../buttons/NavigationButtons/navButtons'
const header = () => {
  return (
    <header>
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