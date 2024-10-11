import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import '../Activities/activities.scss';

const Activities = () => {
  const { t } = useTranslation();
  const [showBA, setShowBA] = useState(true); // Business Analyse actif par défaut

  const handleSwitchChange = () => {
    setShowBA(!showBA); // Inverse l'état à chaque bascule du switch
  };

  return (
    <div className='activities'>
      <div className="header-container">
        <h2>{t('activities')}</h2>
      </div>

      {/* Stack pour afficher le label "Business Analyse", le switch, et le label "UX Design" */}
      <div className="switchToggle">
        <Stack direction="row" alignItems="center" spacing={1}>
          <span 
            style={{ 
              width: '40%',
              fontSize: '24px', 
              fontWeight: showBA ? 'bold' : 'bold', 
              color: showBA ? '#09C2FD' : '#e1e1e1',  // Couleur pour le label sélectionné
              opacity: showBA ? 1 : 0.5,            // Opacité pour le label inactif
              display: 'flex',
              textAlign: 'center',
            }}
          >
            BUSINESS ANALYSE
          </span>
          <Switch 
            checked={!showBA} 
            onChange={handleSwitchChange} 
            sx={{
              width: 70,
              height: 40,
              '& .MuiSwitch-switchBase': {
                color: '#09C2FD', // Couleur du cercle inactif
                height: '40px'
              },
              '& .MuiSwitch-thumb': {
              width: 30,  // Largeur du bouton (cercle)
              height: 30,  // Hauteur du bouton (cercle)
              },
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: '#09C2FD', // Couleur du cercle quand activé
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: '#09C2FD', // Couleur font quand activé
              },
              '& .MuiSwitch-track': {
                backgroundColor: '#09C2FD',  // Couleur font quand désactivé
              }
            }}
          />
          <span 
            style={{ 
              width: '40%',
              fontSize: '24px', 
              fontWeight: !showBA ? 'bold' : 'bold', 
              color: !showBA ? '#09C2FD' : '#e1e1e1', // Couleur pour le label sélectionné
              opacity: !showBA ? 1 : 0.5,           // Opacité pour le label inactif
              textAlign: 'center',
            }}
          >
            UX <br></br>DESIGN
          </span>
        </Stack>
      </div>

      <div className="act-cards-container">
        {showBA ? (
          <div className="act-mini-container">
            <img src="./images/icon-ba.svg" alt="Icône Business Analyse" className="card-image" />
            <div className='border-card'>
              <div className="activities-card">
                <p>{t('actBA')}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="act-mini-container">
            <img src="./images/icon-ui.svg" alt="Icône UX Design" className="card-image" />
            <div className='border-card'>
              <div className="activities-card">
                <p>{t('actUX')}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chips commentés */}
      {/*
      <div className='chips-container'>
        <Stack direction="row" spacing={2}>
          <Chip label={t('analysis')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414'}, fontSize: '14px'}} />
          <Chip label={t('conception')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, fontSize: '14px'}} />
          <Chip label={t('data')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, fontSize: '14px'}} />
          <Chip label={t('qual')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, fontSize: '14px'}} />
          <Chip label={t('gestion')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, fontSize: '14px'}} />
          <Chip label={t('agile')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, fontSize: '14px'}} />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Chip label={t('design')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, fontSize: '14px'}} />
          <Chip label={t('proto')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, fontSize: '14px'}} />
          <Chip label={t('ux')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, fontSize: '14px'}} />
          <Chip label={t('dthink')} variant="outlined"  sx={{ backgroundColor: '#D9D9D9', '& .MuiChip-label': {color: '#141414' }, fontSize: '14px'}} />
        </Stack>
      </div>
      */}
    </div>
  );
};

export default Activities;
