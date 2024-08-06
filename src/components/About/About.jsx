import React from 'react';
import '../About/about.scss';
import { useTranslation } from 'react-i18next';

const About = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  const handleCvEnClick = () => {
    window.open('/pdf/CV-EN.pdf', '_blank');
  };

  const handleCvFrClick = () => {
    window.open('/pdf/CV-FR.pdf', '_blank');
  };

  return (
    <section id="about">
      <div className='about-content'>
        <div className='about-avatar'>
          <img src='/images/avatar.svg' alt='avatar' className='avatar' />
        </div>
        <div className='about-text'>
          <p> {t('about1')}<span className='colored-text'>{t('about2')}</span> {t('about3')} </p>
          <p> {t('about4')} </p>
          <p> {t('about5')} </p>
          <p> {t('about6')} </p>
          <p> {t('about7')} </p>

          <div className='btn-about'>
            <div className='btn-container'>
              <button className='btn-cv' onClick={handleCvEnClick}> 
                <img src="/images/usa-flag.svg" alt="Drapeau USA" className='flag-icon'/>
                {t('cvEn')}
              </button>
            </div>
            <div className='btn-container'>
              <button className='btn-cv' onClick={handleCvFrClick}>
                <img src="/images/france-flag.svg" alt="Drapeau FRANCE" className='flag-icon'/>
                {t('cvFr')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;