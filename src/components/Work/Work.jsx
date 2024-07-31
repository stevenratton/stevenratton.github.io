import React from 'react';
import '../Work/work.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';

const Work = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <section id="work">
      <h2>{t('work')}</h2>
      <LanguageSwitcher 
        selectedLanguage={selectedLanguage} 
        changeLanguage={changeLanguage}
      />
    </section>
  );
};

export default Work;
