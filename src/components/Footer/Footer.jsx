import React from 'react';
import '../Footer/footer.scss';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <section id="footer">
      <h2>{t('footer')}</h2>
    </section>
  );
};

export default Footer;
