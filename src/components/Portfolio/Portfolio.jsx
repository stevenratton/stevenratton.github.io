import React from 'react';
import '../Portfolio/portfolio.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';
import { Carousel } from '../Portfolio/Carousel.jsx';

const Portfolio = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  // Data carousel
  const carouselData = [
    { src: './images/test-portfolio.svg', alt: 'Projet 1' },
    { src: './images/test-port2.svg', alt: 'projet 2' },
    { src: './images/test-portfolio.svg', alt: 'Projet 3' },
  ];

  return (
    <section id="portfolio">
      <h2>{t('RECENT WORK/PORTFOLIO')}</h2>
      <LanguageSwitcher selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      <Carousel data={carouselData} />

      <div className='text-portfolio'>
        <h2>Research Experience</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.</p>
      </div>

    </section>
  );
};

export default Portfolio;

