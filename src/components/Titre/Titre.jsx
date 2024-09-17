import { useEffect, useState } from "react";
import './titre.scss'

const Titre = ({ showLogo }) => {
  const [opacityLogoHead, setOpacityLogoHead] = useState(0);

  useEffect(() => {
    // Contrôle de l'affichage du logo via le prop showLogo
    if (showLogo) {
      setOpacityLogoHead(1); // Afficher le logo
    } else {
      setOpacityLogoHead(0); // Cacher le logo
    }
  }, [showLogo]);

  return (
    <section id="about"
      className="business-container" 
      style={{ opacity: opacityLogoHead, transition: 'opacity 1.5s ease-in-out' }}
      >
      <img
        src='/images/logo-head.svg'
        alt='Logo'
        className='logo-head2'
        style={{ transition: 'opacity 1.5s ease-in-out' }}
      />
    </section>
  )
};

export default Titre;