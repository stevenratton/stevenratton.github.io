import React from 'react';
import './footer.scss'; 
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

 

  return (
    <footer id="footer">
      <div className="footer-content">
        <div>
        <img src='./images/logo_footer.svg' alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-text">
          <p>{t('Made with 💜 by THP · Omiage Copyright © 2024 · All Rights Reserved')}</p>
        </div>
          <div className="footer-logo2">
          <img src='./images/in.svg' alt="Logo" className="footer-logo" />
          </div>
      </div>
    </footer>
  );
};

export default Footer;