import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button  } from "nes-ui-react";

const RedirectButton = (redirectPage: string, label?:string,) => {
    const navigate = useNavigate();

    const handleRedirect= () =>{
        navigate(redirectPage);
    }
  return (
    <Button color="primary" onClick={handleRedirect} >
        {label}
    </Button>
  )
}

export default RedirectButton