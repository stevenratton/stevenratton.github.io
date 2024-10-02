import React, { useState, useEffect } from 'react';
import './cave.scss';

const Cave = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFixed, setIsFixed] = useState(false);
  const [isBureauVisible, setIsBureauVisible] = useState(true); // Nouveau state

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition == windowHeight) {
        setIsBureauVisible(false);
        setIsFixed(true);
      } 
      
      else {

        if (scrollPosition > windowHeight) {
          setIsFixed(true);    
          setIsBureauVisible(true);
        } 

        else {
          setIsFixed(false);    
          setIsBureauVisible(true);
        } 

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
      <div // Background
        className={`cave-layer layer-1 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x / 2 * 0.035}px, ${mousePos.y / 2 * -0.015}px)` }}
      ></div>

      <div // Cadre
        className={`cave-layer layer-2 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x / 2 * -0.0002}px, ${mousePos.y / 2 * -0.005}px)` }}
      ></div>

      <div // Sol
        className={`cave-layer layer-4 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x * 0.001}px, ${mousePos.y * 0.010}px)` }}
      ></div>

      <div // Pilier gauche
        className={`cave-layer layer-5 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x / 3 * 0.020}px, ${mousePos.y / 2 * 0.002}px)` }}
      ></div>

      <div // Pilier droit
        className={`cave-layer layer-6 ${isFixed ? 'fixed' : ''}`}
        style={{ transform: `translate(${mousePos.x / 2 * -0.004}px, ${mousePos.y / 3 * -0.015}px)` }}
      ></div>

      <div // Bureau
        className={`cave-layer layer-7 ${isFixed ? 'fixed' : ''} ${!isBureauVisible ? 'visible' : ''}`}
        style={{ transform: `translate(${mousePos.x / 2 * -0.012}px, ${mousePos.y / 3 * 0.04}px)` }}
      ></div>
    </div>
  );
};

export default Cave;