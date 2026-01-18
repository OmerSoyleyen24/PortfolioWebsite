import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div>© Copyright by Ömer Söyleyen {currentYear}</div>
    </footer>
  );
};

export default Footer;
