import React from 'react';
import '../Contact/contact.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';

const Contact = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <section id="contact">

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
            <input type="checkbox" id="1" name="scales" className='button' />
            <label for="1">Organizational audit</label>
          </div>
          <div className="option">
            <input type="checkbox" id="2" name="scales" className='button' />
            <label for="2">Functional process audit/analysis</label>
          </div>
          <div className="option">
            <input type="checkbox" id="3" name="scales" className='button' />
            <label for="3">Market research/analysis, Market watch</label>
          </div>
          <div className="option">
            <input type="checkbox" id="4" name="scales" className='button' />
            <label for="4">Requirement description (Specify, Write, Model)</label>
          </div>
          <div className="option">
            <input type="checkbox" id="5" name="scales" className='button' />
            <label for="5">Functional or technical innovation</label>
          </div>
          <div className="option">
            <input type="checkbox" id="6" name="scales" className='button' />
            <label for="6">Consulting services</label>
          </div>
          <div className="option">
            <input type="checkbox" id="7" name="scales" className='button' />
            <label for="7">Improve/plan business processes</label>
          </div>
          <div className="option">
            <input type="checkbox" id="8" name="scales" className='button' />
            <label for="8">Brainstorming (UX Workshop, User Questionnaire, etc.)</label>
          </div>
          <div className="option">
            <input type="checkbox" id="9" name="scales" className='button' />
            <label for="9">Conducting functional workshops</label>
          </div>
          <div className="option">
            <input type="checkbox" id="10" name="scales" className='button' />
            <label for="10">Functional referent</label>
          </div>
          <div className="option">
            <input type="checkbox" id="11" name="scales" className='button' />
            <label for="11">Definition/Validation of functional solution</label>
          </div>
          <div className="option">
            <input type="checkbox" id="12" name="scales" className='button' />
            <label for="12">Writing detailed functional specifications</label>
          </div>
          <div className="option">
            <input type="checkbox" id="13" name="scales" className='button' />
            <label for="13">Software quality control</label>
          </div>
          <div className="option">
            <input type="checkbox" id="14" name="scales" className='button' />
            <label for="14">Define the tests to be carried out</label>
          </div>
          <div className="option">
            <input type="checkbox" id="15" name="scales" className='button' />
            <label for="15">Functional acceptance follow-up</label>
          </div>
          <div className="option">
            <input type="checkbox" id="16" name="scales" className='button' />
            <label for="16">Project management</label>
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
