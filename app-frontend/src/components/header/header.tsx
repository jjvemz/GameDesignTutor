import React from 'react'
import RedirectButton from '../buttons/redirectButton'
const header = () => {
  return (
    <header>
      <a href="/" className="logo">  </a>
      <nav>
        <RedirectButton redirectPage="/tutor" label="Tutor"/>
        <RedirectButton redirectPage="/about" label="About us"/>
        <RedirectButton redirectPage="/pricing" label="Pricing"/>
      </nav>
    </header>
  )
}

export default header