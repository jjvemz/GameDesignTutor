import React from 'react';
import { Button  } from "nes-ui-react";

interface SocialMediaButtonProps {
  href: string;
  iconClass: string; 
}

export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  href,
  iconClass,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="nes-ui-link"
  >
    <i className={iconClass} aria-hidden="true"></i>
  </a>
);