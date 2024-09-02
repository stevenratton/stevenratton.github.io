import React, { useState, useEffect } from 'react';
import './Cave.scss';

const Cave = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFixed, setIsFixed] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 1050;
      setOpacity(Math.max(0, 1 - scrollPosition / maxScroll));
      setIsFixed(scrollPosition > maxScroll);
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
      <div className="business-container" style={{ opacity }}>
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
          transform: `translate(${mousePos.x * 0.010}px, ${mousePos.y * 0.010}px)`,
          opacity: opacity
        }}
      ></div>
    </div>
  );
};

export default Cave;






