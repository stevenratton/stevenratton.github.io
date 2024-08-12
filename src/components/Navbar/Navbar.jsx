import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import '../Navbar/navbar.scss';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [hoveredText, setHoveredText] = useState('');
  const [clickedText, setClickedText] = useState('');
  const [activeSection, setActiveSection] = useState('');

  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText('');
  };

  const handleClick = (text) => {
    setClickedText(text);
    setActiveSection(text);
  };

  const getText = () => {
    return hoveredText || clickedText || activeSection;
  }

  const getIconClassName = (text) => {
    if (activeSection === text) {
      return 'icon active';
    } else if (clickedText === text) {
      return 'icon clicked';
    } else if (hoveredText === text) {
      return 'icon hovered';
    }
    return 'icon';
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', text: t('HOME') },
        { id: 'about', text: t('ABOUT') },
        { id: 'work', text: t('WORK') },
        { id: 'portfolio', text: t('PORTFOLIO') },
        { id: 'contact', text: t('CONTACT') },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section.id); // Récupère l'élément HTML de la section
        if (element) {
          const rect = element.getBoundingClientRect(); // Récupère la position et la taille de la section.
          if (rect.top + window.scrollY <= scrollPosition && rect.bottom + window.scrollY > scrollPosition) {
            setActiveSection(section.text);
            setClickedText(section.text);  // Met à jour clickedText pour qu'il suive la section active
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [t]);

  return (
    <div>
      <div className="hover-text">{getText()}</div>
      <div className="navbar-text">
        <div className="navbar">
          <div className="navbar-icons">
            <a href="#home" 
              onMouseEnter={() => handleMouseEnter(t('HOME'))} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(t('HOME'))}
              className="nav-link"
            >
              <FaHome className={getIconClassName(t('HOME'))} />
            </a>
            <a 
              href="#about" 
              onMouseEnter={() => handleMouseEnter(t('ABOUT'))} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(t('ABOUT'))}
              className="nav-link"
            >
              <FaUser className={getIconClassName(t('ABOUT'))} />
            </a>
            <a 
              href="#work" 
              onMouseEnter={() => handleMouseEnter(t('WORK'))} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(t('WORK'))}
              className="nav-link"
            >
              <FaBriefcase className={getIconClassName(t('WORK'))} />
            </a>
            <a 
              href="#portfolio" 
              onMouseEnter={() => handleMouseEnter(t('PORTFOLIO'))} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(t('PORTFOLIO'))}
              className="nav-link"
            >
              <FaFolderOpen className={getIconClassName(t('PORTFOLIO'))} />
            </a>
            <a 
              href="#contact" 
              onMouseEnter={() => handleMouseEnter(t('CONTACT'))} 
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(t('CONTACT'))}
              className="nav-link"
            >
              <FaEnvelope className={getIconClassName(t('CONTACT'))} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
