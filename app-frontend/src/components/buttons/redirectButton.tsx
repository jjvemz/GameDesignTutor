import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button  } from "nes-ui-react";

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
    <Button color="primary" onClick={handleRedirect} >
        {label ?? ''}
    </Button>
  )
}

export default RedirectButton