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
  const [activeSection, setActiveSection] = useState('home');

  const sections = useRef([]);

  // Function to handle click and smooth scroll to the section
  const handleNavClick = (sectionId) => {
    gsap.to(window, {
      scrollTo: { y: `#${sectionId}`, offsetY: 50 }, // Adjust offsetY for navbar height
      duration: 1.5,
    });
    setActiveSection(sectionId);
  };

  useEffect(() => {
    // Select all sections
    const sectionElements = document.querySelectorAll('section');

    sectionElements.forEach((section) => {
      sections.current.push(section);
    });

    // Setup ScrollTrigger for each section
    sections.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center', // When the top of the section hits the center of the viewport
        end: 'bottom center',
        onEnter: () => {
          const sectionId = section.getAttribute('id');
          setActiveSection(sectionId); // Update active section based on scroll
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup
    };
  }, []);

  // Get className for icons based on active section
  const getIconClassName = (sectionId) => {
    return activeSection === sectionId ? 'icon active' : 'icon';
  };

  return (
    <div className="full-nav">
      <div className="navbar">
        <div className="navbar-icons">
          <a onClick={() => handleNavClick('home')}>
            <FaHome className={getIconClassName('home')} />
          </a>
          <a onClick={() => handleNavClick('about')}>
            <FaUser className={getIconClassName('about')} />
          </a>
          <a onClick={() => handleNavClick('work')}>
            <FaBriefcase className={getIconClassName('work')} />
          </a>
          <a onClick={() => handleNavClick('portfolio')}>
            <FaFolderOpen className={getIconClassName('portfolio')} />
          </a>
          <a onClick={() => handleNavClick('contact')}>
            <FaEnvelope className={getIconClassName('contact')} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


