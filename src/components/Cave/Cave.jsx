import React, { useState, useEffect } from 'react';
import './cave.scss';

const Cave = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFixed, setIsFixed] = useState(false);
  const [opacityLogoHead, setOpacityLogoHead] = useState(0);
  const [opacityLayer3, setOpacityLayer3] = useState(1);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 1250; // Point où l'image devient fixe

      if (scrollPosition > maxScroll) {
        setIsFixed(true);
        setOpacityLogoHead(1); // Afficher le logo et le paragraphe
        setOpacityLayer3(0); // Masquer le layer 3
      } else {
        setIsFixed(false);
        setOpacityLogoHead(0); // Cacher le logo et le paragraphe
        setOpacityLayer3(1); // Afficher le layer 3
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="cave-container">
      <div
        className={`business-container ${isFixed ? 'visible' : 'hidden'}`}
        style={{ opacity: opacityLogoHead, transition: 'opacity 0.5s ease-in-out' }}
      >
        <img
          src='/images/logo-head.svg'
          alt='Logo'
          className='logo-head2'
        />
        <p> BUSINESS ANALYST / UX DESIGNER <br />FREELANCE </p>
      </div>

      <div
        className={`cave-layer layer-1 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x * 0.020}px, ${mousePos.y * 0.020}px)` }}
      ></div>
      <div
        className={`cave-layer layer-2 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)` }}
      ></div>
      <div
        className={`cave-layer layer-3 ${isFixed ? 'fixed' : ''}`}
        style={{
          transform: `translate(${mousePos.x * 0.020}px, ${mousePos.y * 0.020}px)`,
          opacity: opacityLayer3,
          transition: 'opacity 0.5s ease-in-out' // Transition fluide pour le layer 3
        }}
      ></div>
      <div
        className={`cave-layer layer-4 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)` }}
      ></div>
      <div
        className={`cave-layer layer-5 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x * 0.025}px, ${mousePos.y * 0.025}px)` }}
      ></div>
      <div
        className={`cave-layer layer-6 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x * 0.025}px, ${mousePos.y * 0.025}px)` }}
      ></div>
    </div>
  );
};

export default Cave;


