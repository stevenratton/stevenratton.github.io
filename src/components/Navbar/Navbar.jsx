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
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('home')}
              className="nav-link"
            >
              <FaHome className={getIconClassName('home')} />
            </a>
            <a
              href="#about"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('about')}
              className="nav-link"
            >
              <FaUser className={getIconClassName('about')} />
            </a>
            <a
              href="#work"
              onMouseEnter={() => handleMouseEnter('work')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('work')}
              className="nav-link"
            >
              <FaBriefcase className={getIconClassName('work')} />
            </a>
            <a
              href="#portfolio"
              onMouseEnter={() => handleMouseEnter('portfolio')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('portfolio')}
              className="nav-link"
            >
              <FaFolderOpen className={getIconClassName('portfolio')} />
            </a>
            <a
              href="#contact"
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick('contact')}
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
