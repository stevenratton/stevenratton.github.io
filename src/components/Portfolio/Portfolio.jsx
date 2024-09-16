import React, { useState } from 'react';
import '../Portfolio/portfolio.scss';
import { useTranslation } from 'react-i18next';
import { Carousel } from '../Portfolio/Carousel.jsx';

const Portfolio = () => {
  const { t } = useTranslation();

  const carouselData = [
    {
      src: './images/portfolio3.jpg',
      alt: 'Projet 3',
      title: 'Big Time - UX Research & design Web3',
      description: t('project3'),
    },
    {
      src: './images/portfolio2.jpg',
      alt: 'Projet 2',
      title: 'Openloot - UX Research & design Web3',
      description: t('project2'),
    },
    {
      src: './images/portfolio5.png',
      alt: 'Projet 5',
      title: 'RFP - Optimism dApp - UX Research & Web3',
      description: t('project5'),
    },
    {
      src: './images/portfolio4.png',
      alt: 'Projet 4',
      title: 'ECO - ECHO Attestation - UX & Web3',
      description: t('project4'),
    },
    {
      src: './images/portfolio1.png',
      alt: 'Projet 1',
      title: 'E-Sport Clubs Pro - UX Design',
      description: t('project1'),
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
      </div>

      <Carousel 
        data={carouselData} 
        onSlideChange={handleSlideChange} 
      />

      <div className='text-portfolio'>
        <h2>{carouselData[currentSlide]?.title || 'Title'}</h2>
        <p dangerouslySetInnerHTML={{ __html: carouselData[currentSlide]?.description || 'Description' }}></p>
      </div>
    </section>
  );
};

export default Portfolio;





