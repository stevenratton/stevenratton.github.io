import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import '../Navbar/navbar.scss';
import { FaHome, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const { t } = useTranslation();
  const [hoveredText, setHoveredText] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const sections = useRef([]);

  // Gestion du survol de texte
  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText('');
  };

  const getText = () => {
    return (hoveredText || activeSection).toUpperCase();
  };

  const handleNavClick = (sectionId) => {
    gsap.to(window, {
      scrollTo: { y: `#${sectionId}`, offsetY: 50 },
      duration: 1.5,
      onComplete: () => {
        setActiveSection(sectionId);
        ScrollTrigger.refresh(true); // Rafraîchir ScrollTrigger immédiatement
      },
    });
  };

  useEffect(() => {
    const sectionElements = document.querySelectorAll('section');
    sections.current = Array.from(sectionElements);

    sections.current.forEach((section) => {
      const sectionId = section.getAttribute('id');

      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(sectionId),
        onEnterBack: () => setActiveSection(sectionId),
        onUpdate: self => {
          // Synchroniser activeSection lors de la mise à jour de ScrollTrigger
          if (self.isActive) {
            setActiveSection(sectionId);
          }
        },
      });
    });

    // Nettoyer ScrollTrigger lors du démontage du composant
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getIconClassName = (sectionId) => {
    if (activeSection === sectionId) {
      return 'icon active';
    } else if (hoveredText === sectionId) {
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
    <div className="full-nav">
      <div className="hover-text">{getText()}</div>
      <div className="navbar">
        <div className="navbar-icons">
          <a
            onClick={() => handleNavClick('home')}
            onMouseEnter={() => handleMouseEnter(homeText)}
            onMouseLeave={handleMouseLeave}
          >
            <FaHome className={getIconClassName('home')} />
          </a>
          <a
            onClick={() => handleNavClick('about')}
            onMouseEnter={() => handleMouseEnter(aboutText)}
            onMouseLeave={handleMouseLeave}
          >
            <FaUser className={getIconClassName('about')} />
          </a>
          <a
            onClick={() => handleNavClick('work')}
            onMouseEnter={() => handleMouseEnter(workText)}
            onMouseLeave={handleMouseLeave}
          >
            <FaBriefcase className={getIconClassName('work')} />
          </a>
          <a
            onClick={() => handleNavClick('portfolio')}
            onMouseEnter={() => handleMouseEnter(portfolioText)}
            onMouseLeave={handleMouseLeave}
          >
            <FaFolderOpen className={getIconClassName('portfolio')} />
          </a>
          <a
            onClick={() => handleNavClick('contact')}
            onMouseEnter={() => handleMouseEnter(contactText)}
            onMouseLeave={handleMouseLeave}
          >
            <FaEnvelope className={getIconClassName('contact')} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;







