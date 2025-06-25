import React from 'react'
import { useNavigate } from 'react-router-dom'

const RedirectButton = (redirectPage: string, label?:string, className?: string) => {
    const navigate = useNavigate();

    const handleRedirect= () =>{
        navigate(redirectPage);
    }
  return (
    <button onClick={handleRedirect} className={className}>
        {label}
    </button>
  )
}

export default RedirectButton