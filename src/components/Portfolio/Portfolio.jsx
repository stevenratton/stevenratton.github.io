import React, { useState } from 'react';
import '../Portfolio/portfolio.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';
import { Carousel } from '../Portfolio/Carousel.jsx';

const Portfolio = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  const carouselData = [
    {
      src: './images/portfolio1.png',
      alt: 'Projet 1',
      title: 'E-Sport Clubs Pro - UX Design',
      description: t('project1')
    },
    {
      src: './images/portfolio1.png',
      alt: 'Projet 2',
      title: '',
      description: ''
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="portfolio">
      <div className="header-container">
        <h2>{t('recent')}</h2>
        <LanguageSwitcher selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      </div>
      
      <Carousel 
        data={carouselData} 
        onSlideChange={handleSlideChange} 
      />

      <div className='text-portfolio'>
        <h2>{carouselData[currentSlide]?.title || 'Title'}</h2>
        <p>{carouselData[currentSlide]?.description || 'Description'}</p>
      </div>
    </section>
  );
};

export default Portfolio;



