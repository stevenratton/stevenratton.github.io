import React, { useState, useEffect } from 'react';
import './cave.scss';

const Cave = () => {  // Ajout du prop showLogo
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFixed, setIsFixed] = useState(false);
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
        setOpacityLayer3(0); // Masquer le layer 3
      } else {
        setIsFixed(false);
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
      {/* Les autres layers */}
      <div // Transition gradient
        className={`cave-layer layer-0 ${isFixed ? 'fixed' : ''}`}
      ></div>
      <div // Background
        className={`cave-layer layer-1 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)` }}
      ></div>
      <div // Cadre
        className={`cave-layer layer-2 ${isFixed ? 'fixed' : ''}`}
      ></div>
      <div // Bureau
        className={`cave-layer layer-3 ${isFixed ? 'fixed' : ''}`}
        style={{
          transform: `translate(${mousePos.x/3 * 0.020}px, ${mousePos.y * 0.020}px)`,
          opacity: opacityLayer3,
          transition: 'opacity 1.5s ease-in-out',
        }}
      ></div>

      <div //Rochers en bas
        className={`cave-layer layer-4 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x / 2 * 0.005}px, ${mousePos.y / 2 * 0.005}px)` }}
      ></div>

      <div //Rochers à gauche
        className={`cave-layer layer-5 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x/3 * 0.020}px, ${mousePos.y/2 * 0.015}px)` }}
      ></div>

      <div //Rochers à droite
        className={`cave-layer layer-6 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x/2 * 0.015}px, ${mousePos.y/3 * 0.020}px)` }}
      ></div>

    </div>
  );
};

export default Cave;