import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header id="header">
      <div className="container">
        <div id="header-wrapper">
          <div id="header-left" className="header-logo">
            Ömer Söyleyen
          </div>
          <div id="header-right" style={{ visibility: isMobileMenuOpen ? 'visible' : 'hidden' }}>
            <button id="header-mobile" onClick={toggleMobileMenu} style={{ visibility: isMobileMenuOpen ? 'hidden' : 'visible' }}>
              <i className="bi bi-list"></i>
            </button>
            <ul className="header-right-list">
              <li className="header-right-list-item">
                <a href="#header">Home <i className="bi bi-chevron-down"></i></a>
              </li>
              <li className="header-right-list-item">
                <a href="#about">About <i className="bi bi-chevron-down"></i></a>
              </li>
              <li className="header-right-list-item">
                <a href="#projects">Projects <i className="bi bi-chevron-down"></i></a>
              </li>
              <li className="header-right-list-item">
                <a href="#contact">Contact Me <i className="bi bi-chevron-down"></i></a>
              </li>
            </ul>
            <button id="header-mobile-close" onClick={toggleMobileMenu} style={{ visibility: isMobileMenuOpen ? 'visible' : 'hidden' }}>
              <i className="bi bi-x-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
