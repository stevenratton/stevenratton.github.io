import React, { useState } from 'react';
import '../Portfolio/portfolio.scss';
import { useTranslation } from 'react-i18next';
import { Carousel } from '../Portfolio/Carousel.jsx';

const Portfolio = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  const carouselData = [
    {
      src: './images/portfolio3.jpg',
      alt: 'Projet 3',
      title: 'Big Time - UX Research & design Web3',
      description: t('project3'),
      links: [
        { url: 'https://www.figma.com/proto/Bz7fSHL6RlJj2Lf0RXffje/Big-Time?node-id=86-3294&t=nlhvzT8u3xPHH1qb-1', text: t('ressource') },
        { url: 'https://whimsical.com/bigtime-time-explorer-mod-PQGB8LbwHcx8r2x4qRjnk2', text: t('ressource2') }
      ]
    },
    {
      src: './images/portfolio2.jpg',
      alt: 'Projet 2',
      title: 'Openloot - UX Research & design Web3',
      description: t('project2'),
      links: [
        { url: 'https://www.figma.com/proto/Bz7fSHL6RlJj2Lf0RXffje/Big-Time?node-id=128-838&node-type=canvas&t=roHPn4McwvnwnW0t-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=128%3A838&show-proto-sidebar=1', text: t('ressource') }
      ]
    },
    {
      src: './images/portfolio5.png',
      alt: 'Projet 5',
      title: 'RFP - Optimism dApp - UX Research & Web3',
      description: t('project5'),
      links: [
        { url: 'https://github.com/ethereum-optimism/ecosystem-contributions/issues/60', text: t('ressource') }
      ]
    },
    {
      src: './images/portfolio4.png',
      alt: 'Projet 4',
      title: 'ECO - ECHO Attestation - UX & Web3',
      description: t('project4'),
      links: [
        { url: 'https://www.figma.com/proto/3pqvAqiD8XrGMmPZOwDtix/ECHO-ATTESTATION?node-id=5-133&t=q7ujSdlPgh9hAzd6-1', text: t('ressource') }
      ]
    },
    {
      src: './images/portfolio1.png',
      alt: 'Projet 1',
      title: 'E-Sport Clubs Pro - UX Design',
      description: t('project1'),
      links: []
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
        <p>{carouselData[currentSlide]?.description || 'Description'}</p>
        <div className='project-links'>
          {Array.isArray(carouselData[currentSlide]?.links) &&
            carouselData[currentSlide].links.map((link, index) => (
              <React.Fragment key={index}>
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {link.text}
                </a>
                {index < carouselData[currentSlide].links.length - 1 && (
                  <span className="separator"> | </span>
                )}
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;




