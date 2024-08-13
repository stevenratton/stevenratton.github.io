import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import '../Work/work.scss';
import { useTranslation } from 'react-i18next';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Enregistrement des composants nécessaires
ChartJS.register(ArcElement, Tooltip, Legend);

const Work = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(0); // Initialisation à 0 pour activer la première catégorie

  const data = {
    labels: [
      t('energy'),
      'Web3',
      t('luxe'),
      'Public',
      t('bank'),
      t('auto'),
      'Gaming'
    ],
    datasets: [
      {
        data: [4, 2, 1, 1, 1, 1, 1],
        backgroundColor: [
          '#0068ff',
          '#a055fa',
          '#73e176',
          '#2190ed',
          '#00cee4',
          '#9fadc7',
          '#73e176'
        ],
        borderWidth: 1,
        hoverOffset: 20, // Augmente la taille du segment au survol
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 25,
          padding: 50,
        },
      },
      tooltip: {
        enabled: false, // Désactiver les tooltips
      },
    },
    rotation: -90, // Commencer le demi-cercle à 180 degrés
    circumference: 180, // Afficher seulement la moitié du cercle
    onHover: (event, chartElement) => {
      if (chartElement.length > 0) {
        const { index } = chartElement[0];
        setHoveredIndex(index);
      } else {
        setHoveredIndex(0);
      }
    }
  };

  const categoryImages = [
    './images/energy.svg',
    './images/openloot.svg',
    './images/chanel.svg',
    './images/mdlm.svg',
    './images/generali.svg',
    './images/bmw.svg',
    './images/EA.svg',
  ];

  const experienceYears = [4, 2, 1, 1, 1, 1, 1];

  return (
    <section id="work">
      <h2>{t('sectors')}</h2>
      <div id="chartdiv">
        <Doughnut data={data} options={options} className="doughnut-chart"/>
        {hoveredIndex !== null && (
          <div className="center-content">
          <img
            src={categoryImages[hoveredIndex]}
            alt={data.labels[hoveredIndex]}
            className="center-image"
          />
          <div className="experience-text">
            {experienceYears[hoveredIndex]} an(s) d'expérience
          </div>
        </div>
        )}
      </div>

      <h2>{t('activities')}</h2>
      <div className="act-cards-container">
        <div className="act-mini-container">
          <img src="./images/icon-ba.svg" alt="Icône Business Analyse" className="card-image" />
          <div className="activities-card">
            <h3> BUSINESS ANALYSE </h3>
            <p> {t('actBA')} </p>
          </div>
        </div>
        <div className="act-mini-container">
          <img src="./images/icon-ui.svg" alt="Icône UX Design" className="card-image" />
          <div className="activities-card">
            <h3> UX DESIGN </h3>
            <p> {t('actUX')} </p>
          </div>
        </div>
      </div>

      <div className='chips-container'>
        <Stack direction="row" spacing={2}>
          <Chip label={t('analysis')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('conception')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('data')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('qual')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('gestion')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('agile')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Chip label={t('design')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('proto')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('ux')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
          <Chip label={t('dthink')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }}} />
        </Stack>
      </div>
    </section>
  );
};

export default Work;
