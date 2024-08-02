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
      <div className="content">
      <div className="p">
        <p>
        You can check whether your requirements match the profile you're looking for before contacting me. <br />
        Use Your wishlist simulator to check if the profile you're looking for is the right one !
        </p>
        </div>
        <div className="button-container">
          <div className="buttontext">
            <img src='/images/logotel.svg' alt='Logo certified' className='logo' />
            <div className="contact-me">Contact me</div>
            <img src='/images/fleche.svg' alt='Logo certified' className='SVG' />
          </div>
        </div>
      </div>

      <div className="checklist-container">
  <div className="left-text">YOUR <br /> NEEDS</div>
  <div className="checklist">
    <div className="option">
      <div className="button" />
      <div className="text-wrapper">Organizational audit</div>
    </div>
    <div className="option">
      <div className="button" />
      <div className="text-wrapper">Market research/analysis, Market watch</div>
    </div>
    <div className="option">
      <div className="button" />
      <div className="text-wrapper">Requirement description (Specify, Write, Model)</div>
    </div>
    <div className="option">
      <div className="button" />
      <div className="text-wrapper">Functional or technical innovation</div>
    </div>
    <div className="option">
      <div className="button" />
      <p className="text-wrapper">Consulting services</p>
    </div>
    <div className="option">
      <div className="button" />
      <div className="text-wrapper">Improve/plan business processes</div>
    </div>
    <div className="option">
      <div className="button" />
      <p className="text-wrapper">Brainstorming (UX Workshop, User Questionnaire, etc.)</p>
    </div>
    <div className="option">
      <div className="button" />
      <p className="text-wrapper">Conducting functional workshops</p>
    </div>
    <div className="option">
      <div className="button" />
      <p className="text-wrapper">Functional referent</p>
    </div>
    <div className="option">
      <div className="button" />
      <div className="text-wrapper">Definition/Validation of functional solution</div>
    </div>
    <div className="option">
      <div className="button" />
      <div className="text-wrapper">Writing detailed functional specifications</div>
    </div>
    <div className="option">
      <div className="button" />
      <p className="text-wrapper">Software quality control</p>
    </div>
    <div className="option">
      <div className="button" />
      <div className="text-wrapper">Define the tests to be carried out</div>
    </div>
    <div className="option">
      <div className="button" />
      <div className="text-wrapper">Functional acceptance follow-up</div>
    </div>
    <div className="option">
      <div className="button" />
      <p className="text-wrapper">Brainstorming (Atelier UX, Questionnaire Utilisateur…)</p>
    </div>
    <div className="option">
      <div className="button" />
      <div className="text-wrapper">Project management</div>
    </div>
  </div>
</div>
      
      <div className="buttonwish-container">
        <div className="buttonwish">
          <img src='/images/logowish.svg' alt='Logo certified' className='logo' />
          <div className="contact-logo">Validate my wishlist</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
