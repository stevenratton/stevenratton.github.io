import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Navbar from '../components/Navbar/Navbar.jsx';
import Home from '../components/Home/Home.jsx';
import Cave from '../components/Cave/Cave.jsx';
import About from '../components/About/About.jsx';
import Work from '../components/Work/Work.jsx';
import Activities from '../components/Activities/Activities.jsx';
import Portfolio from '../components/Portfolio/Portfolio.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Footer from '../components/Footer/Footer.jsx';

gsap.registerPlugin(Observer, ScrollToPlugin);

const SinglePage = ({ selectedLanguage, changeLanguage }) => {
  const sections = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollDelay = 500; // Délai pour éviter le défilement trop rapide

  useEffect(() => {
    let scrollTimeout = null;

    const scrollToSection = (index) => {
      if (index >= 0 && index < sections.current.length) {
        gsap.to(window, {
          scrollTo: { y: sections.current[index], autoKill: false, ease: "power1.inOut" },
          duration: 1,
        });
        setCurrentSection(index);
        setIsScrolling(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => setIsScrolling(false), scrollDelay);
      }
    };

    const handleScroll = (event) => {
      if (isScrolling) return;

      if (event.deltaY > 0) {
        // Scroll Down
        if (currentSection < sections.current.length - 1) {
          console.log('Scrolling down to section:', currentSection + 1);
          scrollToSection(currentSection + 1);
        }
      } else if (event.deltaY < 0) {
        // Scroll Up
        if (currentSection > 0) {
          console.log('Scrolling up to section:', currentSection - 1);
          scrollToSection(currentSection - 1);
        }
      }
    };

    Observer.create({
      target: window,
      type: "wheel,touch",
      onWheel: handleScroll,
      onTouch: handleScroll,
      tolerance: 10,
    });

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        if (currentSection < sections.current.length - 1) {
          console.log('Key down: Scrolling to section:', currentSection + 1);
          scrollToSection(currentSection + 1);
        }
      } else if (event.key === 'ArrowUp') {
        if (currentSection > 0) {
          console.log('Key up: Scrolling to section:', currentSection - 1);
          scrollToSection(currentSection - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      Observer.getAll().forEach(observer => observer.kill());
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
      console.log('Section added:', el);
    }
  };

  return (
    <div className='website-content'>
      <Navbar />
      {/* Home section */}
      <div ref={addToRefs}>
        <Home selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>

      {/* Cave section - séparée de About */}
      <div ref={addToRefs}>
        <Cave />
      </div>

      {/* About section */}
      <div ref={addToRefs}>
        <About selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>

      {/* Work section */}
      <div ref={addToRefs}>
        <Work selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>

      {/* Activities section */}
      <div ref={addToRefs}>
        <Activities selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>

      {/* Portfolio section */}
      <div ref={addToRefs}>
        <Portfolio selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>

      {/* Contact section */}
      <div ref={addToRefs}>
        <Contact selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>

      {/* Footer */}
      <Footer selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
    </div>
  );
};

export default SinglePage;











