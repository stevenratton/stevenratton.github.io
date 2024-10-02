import React, { useState, useEffect } from 'react';
import './titre.scss'

const Titre = ({ showLogo }) => {
  const [opacityLogoHead, setOpacityLogoHead] = useState(0);

  useEffect(() => {
    // Contrôle de l'affichage du logo via le prop showLogo
    if (showLogo) {
      setOpacityLogoHead(0); // Afficher le logo
    } else {
      setOpacityLogoHead(1); // Cacher le logo
    }
  }, [showLogo]);

  return (

    <section id="about">
      <div className="business-container">
        <img className='logo-head2' src='/images/logo-head.svg' alt='Logo'  />
        <p> BUSINESS ANALYST / UX DESIGNER <br></br>FREELANCE</p>
      </div>
      
      <div className="desk"></div>
      
    </section>
    
  )
};

export default Titre;