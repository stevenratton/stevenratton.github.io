import React from 'react';
import '../LangSwitcher/langSwitcher.scss';

const LanguageSwitcher = ({ selectedLanguage, changeLanguage }) => {
  return (
    <div className='lang-btn'>
      <button
        className={selectedLanguage === 'en' ? 'selected' : ''}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <span>|</span>
      <button
        className={selectedLanguage === 'fr' ? 'selected' : ''}
        onClick={() => changeLanguage('fr')}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
