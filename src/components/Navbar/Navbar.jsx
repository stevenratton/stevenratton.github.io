import React, { useState } from 'react';
import { FaHome, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import '../Navbar/navbar.scss';
import { useTranslation } from 'react-i18next';

const Navbar = ({ activeSection, onSectionClick }) => {
  const { t } = useTranslation();
  const [hoveredText, setHoveredText] = useState('');

  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText('');
  };

  const handleClick = (sectionId) => {
    onSectionClick(sectionId);
  };

  const getIconClassName = (text) => {
    if (activeSection === text) {
      return 'icon active';
    } else if (hoveredText === text) {
      return 'icon hovered';
    }
    return 'icon';
  };

  return (
    <div>
      <div className="hover-text">{hoveredText}</div>
      <div className="navbar-text">
        <div className="navbar">
          <div className="navbar-icons">
            <a
              href="#home"
              onMouseEnter={() => handleMouseEnter('HOME')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('HOME')}
              className="nav-link"
            >
              <FaHome className={getIconClassName('HOME')} />
            </a>
            <a
              href="#about"
              onMouseEnter={() => handleMouseEnter('ABOUT')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('ABOUT')}
              className="nav-link"
            >
              <FaUser className={getIconClassName('ABOUT')} />
            </a>
            <a
              href="#work"
              onMouseEnter={() => handleMouseEnter('WORK')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('WORK')}
              className="nav-link"
            >
              <FaBriefcase className={getIconClassName('work')} />
            </a>
            <a
              href="#portfolio"
              onMouseEnter={() => handleMouseEnter('PORTFOLIO')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('PORTFOLIO')}
              className="nav-link"
            >
              <FaFolderOpen className={getIconClassName('portfolio')} />
            </a>
            <a
              href="#contact"
              onMouseEnter={() => handleMouseEnter('CONTACT')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('CONTACT')}
              className="nav-link"
            >
              <FaEnvelope className={getIconClassName('contact')} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
