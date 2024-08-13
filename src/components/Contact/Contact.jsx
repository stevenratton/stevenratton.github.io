import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import '../Contact/contact.scss';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';
import { IoIosArrowForward } from "react-icons/io";
import { TiThListOutline } from "react-icons/ti";
import { HiArrowLongLeft } from "react-icons/hi2";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

const Contact = ({ selectedLanguage, changeLanguage }) => {
  const { t } = useTranslation();
  const [chartData, setChartData] = useState(null);
  const [showChart, setShowChart] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [anyChecked, setAnyChecked] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    setAnyChecked(isAnyChecked);
  };

  const handleRecaptcha = async () => {
    if (!executeRecaptcha) {
      return;
    }
    const token = await executeRecaptcha('contact_form');
    setRecaptchaToken(token);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleRecaptcha();

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    setEmail('');
    setName('');
    setDescription('');
    setRecaptchaToken('');
  };

  const jobAssociations = {
    first: ['Project Owner Support', 'Business Analyst'],
    second: ['Project Owner Support', 'Business Analyst'],
    third: ['Business Analyst', 'Project Owner Support', 'Functional Consultant'],
    fourth: ['Functional Consultant', 'Business Analyst', 'Project Owner Support'],
    fifth: ['Functional Consultant', 'Business Analyst', 'Project Owner Support'],
    sixth: ['Business Analyst', 'Functional Consultant', 'Project Owner Support'],
    seventh: ['Project Owner Support'],
    eighth: ['Project Owner Support', 'Functional Consultant'],
    ninth: ['Business Analyst'],
    tenth: ['Business Analyst'],
    eleventh: ['Business Analyst'],
    twelfth: ['Business Analyst'],
    thirteenth: ['Business Analyst'],
    fourteenth: ['Business Analyst'],
    fifteenth: ['Business Analyst', 'Project Owner Support', 'Functional Consultant'],
    sixteenth: ['Project Owner Support']
  };

  const handleButtonClick = () => {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    const jobCount = {
      'Functional Consultant': 0,
      'Project Owner Support': 0,
      'Business Analyst': 0
    };

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        const jobs = jobAssociations[checkbox.id] || [];
        jobs.forEach(job => {
          if (jobCount[job] !== undefined) {
            jobCount[job]++;
          }
        });
      }
    });

    const total = Object.values(jobCount).reduce((sum, count) => sum + count, 0);
    const data = Object.keys(jobCount).map(job => ({
      label: job,
      value: jobCount[job],
      percentage: (jobCount[job] / total * 100).toFixed(2)
    }));

    setChartData({
      labels: data.map(d => d.label),
      datasets: [{
        data: data.map(d => d.value),
        backgroundColor: ['#00A8E0', '#9783EC', '#73e176'],
        borderWidth: 0
      }]
    });
    setShowChart(true);
  };

  const handleRestart = () => {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    setChartData(null);
    setShowChart(false);
    setAnyChecked(false);
  };

  const handleClick = () => {
    window.location.href = 'https://cal.com/omiage';
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        formatter: (value, context) => {
          const dataset = context.chart.data.datasets[context.datasetIndex];
          const total = dataset.data.reduce((sum, data) => sum + data, 0);
          const percentage = (value / total * 100).toFixed(2) + '%';
          return percentage;
        },
        color: '#1E1E1E',
        font: {
          weight: 'bold'
        },
        anchor: 'end',
        align: 'start'
      }
    },
    elements: {
      arc: {
        borderWidth: 0,
        hoverOffset: 20,
      },
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      },
    },
  };

  return (
    <section id="contact">
      <LanguageSwitcher
        selectedLanguage={selectedLanguage}
        changeLanguage={changeLanguage}
      />

      {!showChart ? (
        <>
          <h2>{t('needs')}</h2>
          <div className="needs-head">
            <div>
              <p>{t('describe-needs1')}</p>
              <p>{t('describe-needs2')}</p>
            </div>
            <div className="button-container2">
              <button className="buttontext" onClick={handleClick}>
                <img src='/images/logotel.svg' alt='Logo phone' className='logo' />
                {t('contactMe')} <IoIosArrowForward />
              </button>
            </div>
          </div>

          <div className="checklist-container">
            <div className="checklist">
              <div className="option">
                <input type="checkbox" id="first" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="first">{t('funct')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="second" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="second">{t('services')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="third" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="third">{t('require')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="fourth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="fourth">{t('spe')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="fifth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="fifth">{t('soluce')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="sixth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="sixth">{t('tests')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="seventh" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="seventh">{t('follow')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="eighth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="eighth">{t('soft')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="ninth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="ninth">{t('workshops')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="tenth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="tenth">{t('innov')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="eleventh" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="eleventh">{t('market')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="twelfth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="twelfth">{t('brain')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="thirteenth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="thirteenth">{t('orga')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="fourteenth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="fourteenth">{t('improve')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="fifteenth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="fifteenth">{t('ref')}</label>
              </div>
              <div className="option">
                <input type="checkbox" id="sixteenth" name="scales" className='button' onChange={handleCheckboxChange} />
                <label htmlFor="sixteenth">{t('project')}</label>
              </div>
            </div>
          </div>

          <div className="buttonwish-container">
            <div 
              className={`buttonwish ${!anyChecked ? 'disabled' : ''}`} 
              onClick={anyChecked ? handleButtonClick : undefined}
            >
              <TiThListOutline className='icon1' /> {t('valWishlist')} <IoIosArrowForward className='icon2' />
            </div>
          </div>
        </>
      ) : (
        <div className='result'>
          <div className="chart-container">
            <div className="chart-wishlist">
              <Doughnut 
                data={chartData} 
                options={chartOptions}
              />
            </div>

            <div className="chart-labels-container">
              {chartData && chartData.labels.map((label, index) => (
                <div className="label-chart" key={index}>
                  <span style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}></span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder='Email address'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Describe your needs</label>
              <textarea
                id="description"
                value={description}
                placeholder='Write here...'
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <button type="submit" className='submit'>Submit</button>
          </form>

          <div className="arrow-container-restart">
            <div className="restart-button" onClick={handleRestart}>
              <HiArrowLongLeft />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;









