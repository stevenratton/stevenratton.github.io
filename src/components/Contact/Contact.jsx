import React from 'react';
import '../Contact/contact.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';

const Contact = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <h2>{t('contact')}</h2>
      <LanguageSwitcher 
        selectedLanguage={selectedLanguage} 
        changeLanguage={changeLanguage}
      />
    </section>
  );
};

export default Contact;
