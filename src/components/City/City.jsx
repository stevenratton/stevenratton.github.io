import React, { useState, useEffect } from 'react';
import './city.scss';

const City = ({ setIsScrolled }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    setMousePos({ x, y });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return(
    <>
      <div className='background-layer layer1' style={{ transform: `translate(${mousePos.x * 0.030}px, ${mousePos.y * 0.030}px)` }}></div>
      <div className='background-layer layer2' style={{ transform: `translate(${mousePos.x * 0.020}px, ${mousePos.y * 0.020}px)` }}></div>
      <div className='background-layer layer3' style={{ transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.0}px)` }}></div>
    </>
  )
};

export default City;