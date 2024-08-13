import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import Work from '../components/Work/Work.jsx';
import Portfolio from '../components/Portfolio/Portfolio.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Footer from '../components/Footer/Footer.jsx';

const SinglePage = ({ selectedLanguage, changeLanguage }) => {
  const sections = [
    { id: 'home', component: <Home selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} /> },
    { id: 'about', component: <About selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} /> },
    { id: 'work', component: <Work selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} /> },
    { id: 'portfolio', component: <Portfolio selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} /> },
    { id: 'contact', component: <Contact selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} /> },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection]);

  const handleSectionClick = (sectionId) => {
    const sectionIndex = sections.findIndex(section => section.id === sectionId);
    if (sectionIndex !== -1) {
      setCurrentSection(sectionIndex);
    }
  };

  return (
    <div className="website-content">
      {/* Passe la section actuelle et le handler de clic à la navbar */}
      <Navbar activeSection={sections[currentSection].id} onSectionClick={handleSectionClick} />
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            style={{
              display: index === currentSection ? 'block' : 'none',
              height: '100%',
            }}
          >
            {section.component}
          </div>
        ))}
      </div>
      <Footer selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
    </div>
  );
};

export default SinglePage;
