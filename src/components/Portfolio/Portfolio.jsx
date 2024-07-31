import React from 'react';
import '../Portfolio/portfolio.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';

const Portfolio = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <section id="portfolio">
      <h2>{t('portfolio')}</h2>
      <LanguageSwitcher 
        selectedLanguage={selectedLanguage} 
        changeLanguage={changeLanguage}
      />
    </section>
  );
};

export default Portfolio;
