import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar/Navbar.jsx';
import LanguageSwitcher from '../components/LangSwitcher/LangSwitcher.jsx';

const Home = ({ selectedLanguage, changeLanguage }) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className='website-content'>
      <Navbar />
      <section id="home">
        <div className='header'>
          <img src='/images/logo-head.svg' alt='Logo' className='logo-head' />
          <LanguageSwitcher 
            selectedLanguage={selectedLanguage} 
            changeLanguage={changeLanguage} 
          />
        </div>
        <div className='home-content'>
          {isEnglish ? (
            <>
              <h1>{t('head1')} 
              <span className='colored-text'> {t('head2')} </span> {t('head3')} </h1>
              <h1> {t('head4')} </h1>
            </>
          ) : (
            <>
              <h1> {t('head1')} </h1>
              <h1> <span className='colored-text'> {t('head2')} </span> {t('head3')} </h1>
            </>
          )}
          <p> Business Analyst <span className='separator'> ● </span> UX Designer </p>
          <img src='/images/certified.svg' alt='Logo certified' className='certified' />
        </div>
      </section>

      <section id="about">
        <h2>{t('about')}</h2>
        <LanguageSwitcher 
        selectedLanguage={selectedLanguage} 
        changeLanguage={changeLanguage}
      />
      </section>

      <section id="work">
        <h2>{t('work')}</h2>
        <LanguageSwitcher 
        selectedLanguage={selectedLanguage} 
        changeLanguage={changeLanguage}
      />
      </section>

      <section id="portfolio">
        <h2>{t('portfolio')}</h2>
        <LanguageSwitcher 
        selectedLanguage={selectedLanguage} 
        changeLanguage={changeLanguage}
      />
      </section>

      <section id="contact">
        <h2>{t('contact')}</h2>
        <LanguageSwitcher 
        selectedLanguage={selectedLanguage} 
        changeLanguage={changeLanguage}
      />
      </section>

      <section id="footer">
        <h2>{t('footer')}</h2>
        <LanguageSwitcher 
        selectedLanguage={selectedLanguage} 
        changeLanguage={changeLanguage}
      />
      </section>
    </div>
  );
};

export default Home;




