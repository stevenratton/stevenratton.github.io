import React from 'react';
import Navbar from '../components/Navbar/Navbar.jsx';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import Work from '../components/Work/Work.jsx';
import Portfolio from '../components/Portfolio/Portfolio.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Footer from '../components/Footer/Footer.jsx';

const SinglePage = ({ selectedLanguage, changeLanguage }) => {
  return (
    <div className='website-content'>
      <Navbar />
      <Home selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      <About selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      <Work selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      <Portfolio selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      <Contact selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
      <Footer selectedLanguage={selectedLanguage} changeLanguage={changeLanguage} />
    </div>
  );
};

export default SinglePage;




