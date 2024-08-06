import React from 'react';
import '../Contact/contact.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';
import { IoIosArrowForward } from "react-icons/io";
import { TiThListOutline } from "react-icons/ti";

const Contact = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    window.location.href = 'https://cal.com/omiage';
  };

  return (
    <section id="contact">
       <LanguageSwitcher
        selectedLanguage={selectedLanguage}
        changeLanguage={changeLanguage}
      />

      <h2> {t('needs')} </h2>
      <div className="needs-head">
        <div>
          <p> {t('describe-needs1')} </p>
          <p> {t('describe-needs2')} </p>
        </div>
        <div className="button-container2">
          <button className="buttontext" onClick={handleClick}>
            <img src='/images/logotel.svg' alt='Logo certified' className='logo' />
            {t('contactMe')} <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="checklist-container">
        <div className="checklist">
          <div className="option">
            <input type="checkbox" id="first" name="scales" className='button' />
            <label htmlFor="first"> {t('orga')} </label>
          </div>
          <div className="option">
            <input type="checkbox" id="second" name="scales" className='button' />
            <label htmlFor="second">{t('funct')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="third" name="scales" className='button' />
            <label htmlFor="third">{t('market')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="fourth" name="scales" className='button' />
            <label htmlFor="fourth">{t('require')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="fifth" name="scales" className='button' />
            <label htmlFor="fifth">{t('innov')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="sixth" name="scales" className='button' />
            <label htmlFor="sixth">{t('services')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="seventh" name="scales" className='button' />
            <label htmlFor="seventh">{t('improve')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="eighth" name="scales" className='button' />
            <label htmlFor="eighth">{t('brain')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="ninth" name="scales" className='button' />
            <label htmlFor="ninth">{t('workshops')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="tenth" name="scales" className='button' />
            <label htmlFor="tenth">{t('ref')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="eleventh" name="scales" className='button' />
            <label htmlFor="eleventh">{t('soluce')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="twelfth" name="scales" className='button' />
            <label htmlFor="twelfth">{t('spe')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="thirteenth" name="scales" className='button' />
            <label htmlFor="thirteenth">{t('soft')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="fourteenth" name="scales" className='button' />
            <label htmlFor="fourteenth">{t('tests')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="fifteenth" name="scales" className='button' />
            <label htmlFor="fifteenth">{t('follow')}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="sixteenth" name="scales" className='button' />
            <label htmlFor="sixteenth">{t('project')}</label>
          </div>
        </div>
      </div>

      <div className="buttonwish-container">
        <div className="buttonwish">
          <TiThListOutline className='icon1'/> {t('valWishlist')} <IoIosArrowForward className='icon2'/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
