import React, { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import '../Navbar/navbar.scss';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
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

  const getText = () => {
    return hoveredText || clickedText; 
  }

  const getIconClassName = (text) => {
    if (clickedText === text) {
      return 'icon clicked';
    } else if (hoveredText === text) {
      return 'icon hovered';
    }
    return 'icon';
  };

  const homeText = t('HOME');
  const aboutText = t('ABOUT');
  const workText = t('WORK');
  const portfolioText = t('PORTFOLIO');
  const contactText = t('CONTACT');

  return (
    <div>
      <div className="hover-text">{getText()}</div>
      <div className="navbar-text">
        <div className="navbar">
          <div className="navbar-icons">
            <a href="#home" 
              onMouseEnter={() => handleMouseEnter(homeText)} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(homeText)}
              className="nav-link"
            >
              <FaHome className={getIconClassName(homeText)} />
            </a>
            <a 
              href="#about" 
              onMouseEnter={() => handleMouseEnter(aboutText)} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(aboutText)}
              className="nav-link"
            >
              <FaUser className={getIconClassName(aboutText)} />
            </a>
            <a 
              href="#work" 
              onMouseEnter={() => handleMouseEnter(workText)} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(workText)}
              className="nav-link"
            >
              <FaBriefcase className={getIconClassName(workText)} />
            </a>
            <a 
              href="#portfolio" 
              onMouseEnter={() => handleMouseEnter(portfolioText)} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(portfolioText)}
              className="nav-link"
            >
              <FaFolderOpen className={getIconClassName(portfolioText)} />
            </a>
            <a 
              href="#contact" 
              onMouseEnter={() => handleMouseEnter(contactText)} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(contactText)}
              className="nav-link"
            >
              <FaEnvelope className={getIconClassName(contactText)} />
            </a>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Navbar;