import React, { useEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import '../Work/work.scss';
import { useTranslation } from 'react-i18next';

const Work = () => {
  const { t } = useTranslation();
  const chartRef = useRef(null);
  const centerImageRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        startAngle: 180,
        endAngle: 360,
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        startAngle: 180,
        endAngle: 360,
        valueField: 'value',
        categoryField: 'category',
        alignLabels: false,
      })
    );

    series.states.create('hidden', {
      startAngle: 180,
      endAngle: 180,
    });

    series.slices.template.setAll({
      cornerRadius: 5,
      tooltipText: "", // Désactiver les tooltips
    });

    series.labels.template.setAll({
      fill: am5.color(0xD9D9D9),
      text: "{category} ({value}e)"
    });

    series.ticks.template.setAll({
      forceHidden: true,
    });

    const data = [
      { value: 4, category: t('energy'), imageSrc: './images/energy.svg' },
      { value: 2, category: 'Web3', imageSrc: './images/openloot.svg' },
      { value: 1, category: t('luxe'), imageSrc: './images/chanel.svg' },
      { value: 1, category: 'Public', imageSrc: './images/mdlm.svg' },
      { value: 1, category: t('bank'), imageSrc: './images/generali.svg' },
      { value: 1, category: t('auto'), imageSrc: './images/bmw.svg' },
      { value: 1, category: 'Gaming', imageSrc: './images/EA.svg' }
    ];

    series.data.setAll(data);

    series.appear(1000, 100);

    // Ajouter une image au centre du graphique
    const centerImage = root.container.children.push(
      am5.Picture.new(root, {
        x: am5.percent(50),
        y: am5.percent(50),
        centerX: am5.percent(50),
        centerY: am5.percent(-70),
        width: 80,
        height: 100,
        interactive: false
      })
    );

    centerImageRef.current = centerImage; // Stocker la référence de l'image centrale

    // Trouver tous les slices
    const energySlice = series.dataItems.find(item => item.get("category") === t('energy'));
    const webSlice = series.dataItems.find(item => item.get("category") === ("Web3"));
    const luxeSlice = series.dataItems.find(item => item.get("category") === t('luxe'));
    const publicSlice = series.dataItems.find(item => item.get("category") === ("Public"));
    const bankSlice = series.dataItems.find(item => item.get("category") === t('bank'));
    const autoSlice = series.dataItems.find(item => item.get("category") === t('auto'));
    const gameSlice = series.dataItems.find(item => item.get("category") === ("Gaming"));

    // Déterminer quel slice est sélectionné
    const selectedSlice = luxeSlice || energySlice || webSlice || publicSlice || bankSlice || autoSlice || gameSlice;

    if (selectedSlice) {
      selectedSlice.get("slice").set("active", true);
      if (centerImageRef.current) {
        centerImageRef.current.set("src", selectedSlice.dataContext.imageSrc); // Mettre à jour l'image du centre
      }
    }

    // Nettoyer lors du démontage du composant
    return () => {
      root.dispose();
    };
  }, [t]);

  return (
    <section id="work">
      <h2>{t('EXPERIENCE SECTORS')}</h2>
      <div id="chartdiv" ref={chartRef}></div>
      <h2>{t('ACTIVITIES')}</h2>
    </section>
  );
};

export default Work;













