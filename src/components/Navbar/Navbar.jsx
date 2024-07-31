import React, { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import '../Navbar/navbar.scss'

const Navbar = () => {
  const [hoveredText, setHoveredText] = useState('');
  const [clickedText, setClickedText] = useState('');

  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText('');
  };

  const handleClick = (text) => {
    setClickedText(text);
  };

  const getIconClassName = (text) => {
    if (clickedText === text) {
      return 'icon clicked';
    } else if (hoveredText === text) {
      return 'icon hovered';
    }
    return 'icon';
  };

  return (
    <div>
      <div className="hover-text-container">
        <div className="hover-text">{clickedText || hoveredText}</div>
      </div>
      <nav className="navbar">
        <div className="navbar-icons">
          <a href="#home" 
            onMouseEnter={() => handleMouseEnter('Home')} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('HOME')}
            className="nav-link"
          >
            <FaHome className={getIconClassName('Home')} />
          </a>
          <a 
            href="#about" 
            onMouseEnter={() => handleMouseEnter('About')} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('ABOUT')}
            className="nav-link"
          >
            <FaUser className={getIconClassName('About')} />
          </a>
          <a 
            href="#work" 
            onMouseEnter={() => handleMouseEnter('Work')} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('WORK')}
            className="nav-link"
          >
            <FaBriefcase className={getIconClassName('Work')} />
          </a>
          <a 
            href="#portfolio" 
            onMouseEnter={() => handleMouseEnter('Portfolio')} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('ACTIVITIES')}
            className="nav-link"
          >
            <FaFolderOpen className={getIconClassName('Portfolio')} />
          </a>
          <a 
            href="#contact" 
            onMouseEnter={() => handleMouseEnter('Contact')} 
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick('CONTACT')}
            className="nav-link"
          >
            <FaEnvelope className={getIconClassName('Contact')} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



