import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SinglePage from './pages/SinglePage';
import './App.scss';

function App() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SinglePage 
          selectedLanguage={selectedLanguage} 
          changeLanguage={changeLanguage}
        />} />
      </Routes>
    </>
  );
}

export default App;