import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../Work/work.scss';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const Chart = ({ selectedLanguage }) => {
  const { t } = useTranslation();

  useEffect(() => {
    // Create root element
    const root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        startAngle: 160,
        endAngle: 380
      })
    );

    // Define color set
    const colorSet = am5.ColorSet.new(root, {
      colors: [
        am5.color("#87CEFA"),
        am5.color("#5193F6"),
        am5.color("#70A5FF"),
        am5.color("#6050DC"),
        am5.color("#9B8BF1"),
        am5.color("#B668AD"),
        am5.color("#FFA0D7")
      ]
    });

    // Create series for outer segments
    const series0 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "experience",
        categoryField: "domain",
        startAngle: 160,
        endAngle: 380,
        radius: am5.percent(70),
        innerRadius: am5.percent(65),
        colors: colorSet
      })
    );

    series0.labels.template.set("forceHidden", true);
    series0.ticks.template.set("forceHidden", true);

    // Create series for inner segments
    const series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        startAngle: 160,
        endAngle: 380,
        valueField: "experience",
        innerRadius: am5.percent(80),
        categoryField: "domain",
        colors: colorSet
      })
    );

    series1.ticks.template.set("forceHidden", true);
    series1.labels.template.set("forceHidden", true);

    // Configure tooltips
    series1.slices.template.setAll({
      tooltipText: "{category} ({value}e)",
      tooltipY: 0,
    });

    chart.seriesContainer.children.push(
      am5.Label.new(root, {
        textAlign: "center",
        centerY: am5.p100,
        centerX: am5.p50,
        text: "25 ans"
      })
    );

    const data = [
      { domain: t('energy'), experience: 4 },
      { domain: "Web3", experience: 2 },
      { domain: t('luxe'), experience: 1 },
      { domain: "Public", experience: 1 },
      { domain: t('bank'), experience: 1 },
      { domain: t('auto'), experience: 1 },
      { domain: "Gaming", experience: 1 }
    ];

    series0.data.setAll(data);
    series1.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, [t, selectedLanguage]);

  return (
    <div id="chartdiv"></div>
  );
};

export default Chart;


