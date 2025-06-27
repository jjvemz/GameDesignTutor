import React from 'react';
import { useNavigate } from 'react-router-dom';

interface RedirectButtonProps {
  redirectPage: string;
  label?: string | null;
}


const RedirectButton: React.FC<RedirectButtonProps> = ({ redirectPage, label }) => {
    const navigate = useNavigate();

    const handleRedirect= () =>{
        navigate(redirectPage);
    }
  return (
    <button type="button" className="nes-btn is-primary" onClick={handleRedirect} >
        {label ?? ''}
    </button>
  )
}

export default RedirectButton