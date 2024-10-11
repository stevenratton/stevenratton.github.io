import React, { useState, useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../Work/work.scss';
import { useTranslation } from 'react-i18next';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Work = () => {
  const { t, i18n } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const sectionRef = useRef(null);

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
          '#27ae60',
          '#3498db',
          '#f39c12',
          '#1abc9c',
          '#bdc3c7',
          '#e74c3c',
          '#8e44ad'
        ],
        borderWidth: 0,
        hoverOffset: 25,
        spacing: 10,
        offset: [30, 0, 0, 0, 0, 0, 0],
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
          boxHeight: 25,
          padding: 26,
          font: {
            size: 14,
            family: 'Roboto Slab',
            weight: 'bold',
          },
          color: '#D9D9D9',
        },
        onClick: () => {}, // Désactive le click sur la légende
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        color: 'transparent',
      },
    },
    rotation: -90,
    circumference: 180,
    onHover: (event, chartElement) => {
      if (chartElement.length > 0) {
        const { index } = chartElement[0];
        setHoveredIndex(index);
      } else {
        setHoveredIndex(0);
      }
    },
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

  useEffect(() => {
    setHoveredIndex(0);
  }, []);

  return (
    <section id="work" ref={sectionRef}>
      <div className="header-container">
        <h2>{t('sectors')}</h2>
      </div>

      <div id="chartdiv">
        <Doughnut data={data} options={options} className="doughnut-chart"/>
      </div>
      {hoveredIndex !== null && (
          <div className="center-content">
            <img
              src={categoryImages[hoveredIndex]}
              alt={data.labels[hoveredIndex]}
              className="center-image"
            />
            <div className="experience-text">
              {t('years_experience', { count: experienceYears[hoveredIndex] })}
            </div>
          </div>
        )}
    </section>
  );
};

export default Work;



