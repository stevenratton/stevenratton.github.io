import React from 'react';
import '../About/about.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';

const About = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <LanguageSwitcher 
        selectedLanguage={selectedLanguage} 
        changeLanguage={changeLanguage}
      />
      
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
            <button className='btn-cv'> {t('cvEn')} </button>
            </div>
            <div className='btn-container'>
            <button className='btn-cv'> {t('cvFr')} </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

