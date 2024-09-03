import React, { useState, useEffect } from 'react';
import './cave.scss';

const Cave = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFixed, setIsFixed] = useState(false);
  const [opacityLayer3, setOpacityLayer3] = useState(1);
  const [opacityLogoHead, setOpacityLogoHead] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 999; // Point où l'image devient fixe

      // Opacité du layer 3
      const newOpacityLayer3 = Math.max(0, 1 - scrollPosition / maxScroll);
      setOpacityLayer3(newOpacityLayer3);

      // Opacité du logo-head en fonction du layer 3
      const newOpacityLogoHead = 1 - newOpacityLayer3;
      setOpacityLogoHead(newOpacityLogoHead);

      // Définir le moment où l'image devient fixe
      if (scrollPosition > maxScroll) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
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
      <div className="business-container">
        <img
          src='/images/logo-head.svg'
          alt='Logo'
          className='logo-head2'
          style={{ opacity: opacityLogoHead }}
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
          opacity: opacityLayer3
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
