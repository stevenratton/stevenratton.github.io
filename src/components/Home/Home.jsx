import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../Home/home.scss';
import { FaRegRectangleList } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import City from '../City/City.jsx';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    window.location.href = 'https://cal.com/omiage';
  };

  return (
    <section id='home'>
      <City setIsScrolled={setIsScrolled} />

      <div className='header-button'>
        <div className='header'>
          <img
            src='/images/logo-head.svg'
            alt='Logo'
            className={`logo-head ${isScrolled ? 'hidden' : ''}`}
          />
        </div>

        {isEnglish ? (
          <div className='text-home'>
            <h1>{t('head1')} <span className='colored-text'> {t('head2')} </span> {t('head3')} </h1>
            <h1> {t('head4')} </h1>
          </div>
        ) : (
          <div className='text-home'>
            <h1> {t('head1')} </h1>
            <h1> <span className='colored-text'> {t('head2')} </span> {t('head3')} </h1>
          </div>
        )}

        <div className='bottom-home'>
          <div className="button-container">
            <button className="button-text" onClick={handleClick}>
              <img src='/images/logotel.svg' alt='Logo certified' className='logo' />
              {t('contactMe')} <IoIosArrowForward />
            </button>
            <button className="button-text" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <img src='/images/logo-wishlist.svg' alt='Logo certified' className='logo' />
              {t('wishlist')} <IoIosArrowForward />
            </button>
          </div>
          <div className='logo-certif'>
            <img src='/images/certified.svg' alt='Logo certified' className='certified' />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;