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
  const [hoveredCategory, setHoveredCategory] = useState(null);

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
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF9F40',
          '#4BC0C0',
          '#9966FF',
          '#FF6384'
        ],
        borderWidth: 1,
        hoverOffset: 15, // Augmente la taille du segment au survol
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: false, // Désactiver les tooltips
      },
    },
    rotation: -90, // Commencer le demi-cercle à 180 degrés
    circumference: 180, // Afficher seulement la moitié du cercle
  };

  const categoryImages = {
    [t('energy')]: './images/energy.svg',
    'Web3': './images/openloot.svg',
    [t('luxe')]: './images/chanel.svg',
    'Public': './images/mdlm.svg',
    [t('bank')]: './images/generali.svg',
    [t('auto')]: './images/bmw.svg',
    'Gaming': './images/EA.svg',
  };

  return (
    <section id="work">
      <h2>{t('sectors')}</h2>
      <div id="chartdiv">
        <Doughnut
          data={data}
          options={options}
          onElementsHover={(elements) => {
            if (elements.length > 0) {
              const { index } = elements[0];
              setHoveredCategory(data.labels[index]);
            } else {
              setHoveredCategory(null);
            }
          }}
        />
        {hoveredCategory && (
          <img
            src={categoryImages[hoveredCategory]}
            alt={hoveredCategory}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
            }}
          />
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
