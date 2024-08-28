import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs'; // Flèche vers le bas
import '../Navbar/navbar.scss';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [hoveredText, setHoveredText] = useState('');
  const [activeSection, setActiveSection] = useState('');

  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText('');
  };

  const getText = () => {
    return hoveredText || activeSection;
  };

  const getIconClassName = (text) => {
    if (activeSection === text) {
      return 'icon active';
    } else if (hoveredText === text) {
      return 'icon hovered';
    }
    return 'icon';
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      switch (currentSection) {
        case 'home':
          setActiveSection(t('HOME'));
          break;
        case 'about':
          setActiveSection(t('ABOUT'));
          break;
        case 'work':
          setActiveSection(t('WORK'));
          break;
        case 'portfolio':
          setActiveSection(t('PORTFOLIO'));
          break;
        case 'contact':
          setActiveSection(t('CONTACT'));
          break;
        default:
          setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [t]);

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
            <a
              href="#home"
              onMouseEnter={() => handleMouseEnter(homeText)}
              onMouseLeave={handleMouseLeave}
              className={`nav-link ${activeSection === homeText ? 'active' : ''}`}
            >
              <FaHome className={getIconClassName(homeText)} />
              <BsChevronDown className="arrow-icon" />
            </a>
            <a
              href="#about"
              onMouseEnter={() => handleMouseEnter(aboutText)}
              onMouseLeave={handleMouseLeave}
              className={`nav-link ${activeSection === aboutText ? 'active' : ''}`}
            >
              <FaUser className={getIconClassName(aboutText)} />
              <BsChevronDown className="arrow-icon" />
            </a>
            <a
              href="#work"
              onMouseEnter={() => handleMouseEnter(workText)}
              onMouseLeave={handleMouseLeave}
              className={`nav-link ${activeSection === workText ? 'active' : ''}`}
            >
              <FaBriefcase className={getIconClassName(workText)} />
              <BsChevronDown className="arrow-icon" />
            </a>
            <a
              href="#portfolio"
              onMouseEnter={() => handleMouseEnter(portfolioText)}
              onMouseLeave={handleMouseLeave}
              className={`nav-link ${activeSection === portfolioText ? 'active' : ''}`}
            >
              <FaFolderOpen className={getIconClassName(portfolioText)} />
              <BsChevronDown className="arrow-icon" />
            </a>
            <a
              href="#contact"
              onMouseEnter={() => handleMouseEnter(contactText)}
              onMouseLeave={handleMouseLeave}
              className={`nav-link ${activeSection === contactText ? 'active' : ''}`}
            >
              <FaEnvelope className={getIconClassName(contactText)} />
              <BsChevronDown className="arrow-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


