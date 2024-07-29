import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
    "head1" : "Imagine",
    "head2" : "tomorrow's",
    "head3" : "Web3",
    "head4" : "experience, today",
    "contactMe" : "Contact me",
    "wishlist" : "Consult wishlist",
    "about1" : "Hi ! I'm Steven/",
    "about2" : "Omiage",
    "about3" : ", a French Business Analyst | UX Designer | Web3 Entrepreneur !",
    "about4" : "Now immersed in the Web3 / Blockchain space,  I'm passionate about collaborating with forward-thinking companies to push the boundaries of innovation and user experience.",
    "about5" : "From NFT marketplaces to decentralized  applications (dApps), I thrive on understanding functional needs and  creating intuitive interfaces that resonate with users and drive  results.",
    "about6" : "Guiding to understand and decode usage patterns,  brainstorming together to discover the individuals behind your strategic  goals and how to place them at the heart of memorable services. Finding  the best solution for your needs or challenges while learning every day from our surroundings.",
    "about7" : "Reach out, and let's bring your vision to life !",
    "cvEn" : "English CV",
    "cvFr" : "French CV",
    }
  },
  fr: {
    translation: {
    "head1" : "Imaginez l'experience Web3",
    "head2" : "de demain,",
    "head3" : "aujourd'hui",
    "contactMe" : "Contactez-moi",
    "wishlist" : "Consultez la wishlist",
    "about1" : "Bonjour ! Je suis Steven/",
    "about2" : "Omiage",
    "about3" : ", un Business Analyst | UX Designer | Web3 Entrepreneur français !",
    "about4" : "Désormais immergé dans l'espace Web3/Blockchain, je suis passionné par la collaboration avec des entreprises avant-gardistes pour repousser les limites de l'innovation et de l'expérience utilisateur.",
    "about5" : "Des marchés NFT aux applications décentralisées (dApps), je m'efforce de comprendre les besoins fonctionnels et de créer des interfaces intuitives qui trouvent un écho auprès des utilisateurs et génèrent des résultats.",
    "about6" : "Accompagner pour comprendre et décoder les usages, réfléchir ensemble pour découvrir les individus derrière vos objectifs stratégiques et comment les placer au cœur de services mémorables. Trouver la meilleure solution à vos besoins ou défis tout en apprenant chaque jour de notre environnement.",
    "about7" : "Contactez-moi et donnons vie à votre vision !",
    "cvEn" : "CV anglais",
    "cvFr" : "CV français",
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
