import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LanguageSwitcher from '../LangSwitcher/LangSwitcher.jsx';
import { useTranslation } from 'react-i18next';
import '../Activities/activities.scss';

const Activities = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return(
    <div className='activities'>
      <div className="header-container">
        <h2>{t('activities')}</h2>
        <LanguageSwitcher 
              selectedLanguage={i18n.language} 
              changeLanguage={handleLanguageChange} 
        />
      </div>

      <div className="act-cards-container">
        <div className="act-mini-container">
          <img src="./images/icon-ba.svg" alt="Icône Business Analyse" className="card-image" />
          <div className='border-card'>
            <div className="activities-card">
              <h3> BUSINESS ANALYSE </h3>
              <p> {t('actBA')} </p>
            </div>
          </div>
        </div>
        <div className="act-mini-container">
          <img src="./images/icon-ui.svg" alt="Icône UX Design" className="card-image" />
          <div className='border-card'>
            <div className="activities-card">
              <h3> UX DESIGN </h3>
              <p> {t('actUX')} </p>
            </div>
          </div>
        </div>
      </div>

      <div className='chips-container'>
        <Stack direction="row" spacing={2}>
          <Chip label={t('analysis')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414'}, padding: '16px 20px', fontSize: '14px'}} />
          <Chip label={t('conception')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, padding: '16px 20px', fontSize: '14px'}} />
          <Chip label={t('data')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, padding: '16px 20px', fontSize: '14px'}} />
          <Chip label={t('qual')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, padding: '16px 20px', fontSize: '14px'}} />
          <Chip label={t('gestion')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, padding: '16px 20px', fontSize: '14px'}} />
          <Chip label={t('agile')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, padding: '16px 20px', fontSize: '14px'}} />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Chip label={t('design')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, padding: '16px 20px', fontSize: '14px'}} />
          <Chip label={t('proto')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, padding: '16px 20px', fontSize: '14px'}} />
          <Chip label={t('ux')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, padding: '16px 20px', fontSize: '14px'}} />
          <Chip label={t('dthink')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, padding: '16px 20px', fontSize: '14px'}} />
        </Stack>
      </div>
    </div>
  )
};

export default Activities;
