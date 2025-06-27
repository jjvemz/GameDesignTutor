import React from 'react';
import { navButtons } from "../../../data/buttons/navButtons";
import RedirectButton from "../RedirectButton/redirectButton";

const NavButtons: React.FC = () => {
  return (
    <>
      {navButtons.map((btn, index) => (
        <RedirectButton
          key={index}
          redirectPage={btn.redirectPage}
          label={btn.label}
        />
      ))}
    </>
  );
};

export default NavButtons;