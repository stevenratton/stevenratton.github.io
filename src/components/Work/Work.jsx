import React from 'react';
import '../Work/work.scss';
import { useTranslation } from 'react-i18next';
import Chart from './Chart.jsx';

const Work = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <section id="work">
      <h2>{t('EXPERIENCE SECTORS')}</h2>
      <Chart selectedLanguage={selectedLanguage} />

      <h2>{t('ACTIVITIES')}</h2>

    </section>
  );
};

export default Work;

