import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
    "head1" : "Imagine",
    "head2" : "tomorrow's",
    "head3" : "Web3",
    "head4" : "experience, today",
    }
  },
  fr: {
    translation: {
    "head1" : "Imaginez l'experience Web3",
    "head2" : "de demain,",
    "head3" : "aujourd'hui",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
