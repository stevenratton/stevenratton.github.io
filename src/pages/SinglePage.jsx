import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import '../pages/singlePage.scss';
import Navbar from '../components/Navbar/Navbar.jsx';
import Home from '../components/Home/Home.jsx';
import Cave from '../components/Cave/Cave.jsx';
import About from '../components/About/About.jsx';
import Work from '../components/Work/Work.jsx';
import Activities from '../components/Activities/Activities.jsx';
import Portfolio from '../components/Portfolio/Portfolio.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Footer from '../components/Footer/Footer.jsx';
import LangSwitcher from '../components/LangSwitcher/LangSwitcher.jsx';
import Titre from '../components/Titre/Titre.jsx';

gsap.registerPlugin(Observer, ScrollToPlugin);

const SinglePage = ({ selectedLanguage, changeLanguage }) => {
  const sections = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const caveSectionRef = useRef(null);
  const titreRef = useRef(null);
  const scrollDelay = 500;

  useEffect(() => {
    let scrollTimeout = null;

    const scrollToSection = (index) => {
      if (index >= 0 && index < sections.current.length) {
        gsap.to(window, {
          scrollTo: { y: sections.current[index], autoKill: false, ease: 'power1.inOut' },
          duration: 1.5,
        });

        sections.current.forEach((section, i) => {
          if (i === index) {
            gsap.to(section, { opacity: 1, duration: 0.5, ease: 'power1.inOut' });
            section.classList.add('active');
          } else if (i !== 1) {
            gsap.to(section, { opacity: 0, duration: 0.5, ease: 'power1.inOut' });
            section.classList.remove('active');
          }
        });

        setCurrentSection(index);
        setIsScrolling(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => setIsScrolling(false), scrollDelay);

        if (index === 1) {
          setShowLogo(true);
        } else {
          setShowLogo(false);
        }
      }
    };

    const handleScroll = (event) => {
      if (isScrolling) return;

      if (event.deltaY > 0) {
        if (currentSection < sections.current.length - 1) {
          scrollToSection(currentSection + 1);
        }
      } else if (event.deltaY < 0) {
        if (currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      }
    };

    Observer.create({
      target: window,
      type: 'wheel,touch',
      onWheel: handleScroll,
      onTouch: handleScroll,
      tolerance: 10,
    });

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown') {
        if (currentSection < sections.current.length - 1) {
          scrollToSection(currentSection + 1);
        }
      } else if (event.key === 'ArrowUp') {
        if (currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      Observer.getAll().forEach((observer) => observer.kill());
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  useEffect(() => {
    const handleScroll = () => {
      if (caveSectionRef.current && titreRef.current) {
        const caveRect = caveSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (caveRect.top <= windowHeight && caveRect.bottom >= 0) {
          const progress = Math.min(1, Math.max(0, (windowHeight - caveRect.top) / windowHeight));
          gsap.to(titreRef.current, { opacity: progress, duration: 0.3, ease: 'power1.out' });
        } else {
          gsap.to(titreRef.current, { opacity: 0, duration: 0.3, ease: 'power1.out' });
        }
      }
    };
  
    // Ajouter l'événement de scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  
  

  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  return (
    <div className='website-content'>
      <LangSwitcher selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      <Navbar />
      <div className="section-wrapper" ref={addToRefs}>
        <Home selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>

      {/* Combine Cave and Titre into one wrapper */}
      <div className="section-wrapper cave-titre-wrapper" ref={addToRefs}>
        <div ref={caveSectionRef}>
          <Cave />
        </div>
        <div ref={titreRef} className="titre">
          <Titre showLogo={showLogo} />
        </div>
      </div>

      <div className="section-wrapper" ref={addToRefs}>
        <About selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>
      <div className="section-wrapper sw-work" ref={addToRefs}>
        <Work selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>
      <div className="section-wrapper sw-act" ref={addToRefs}>
        <Activities selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>
      <div className="section-wrapper sw-port" ref={addToRefs}>
        <Portfolio selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>
      <div className="section-wrapper" ref={addToRefs}>
        <Contact selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>
      {/* Footer Section */}
      <div className="section-wrapper" ref={addToRefs}>
        <Footer selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>
    </div>
  );
};

export default SinglePage;