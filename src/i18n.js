import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
    "HOME" : "HOME",
    "ABOUT" : "ABOUT",
    "WORK" : "WORK",
    "PORTFOLIO" : "PORTFOLIO",
    "CONTACT" : "CONTACT",

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

    "sectors" : "EXPERIENCE SECTORS",
    "energy" : "Energy",
    "luxe" : "Luxury",
    "bank" : "Bank/Insurance",
    "auto" : "Automotive",
    "years_experience": "{{count}} year(s) of experience",

    "activities" : "ACTIVITIES",
    "actBA" : "I support you in your digital transformation by acting as a link between the business and development teams, carrying out in-depth functional analyses, modeling solutions adapted to your needs through user-centered design, ensuring development quality via acceptance criteria and acceptance tests, and user training. In project management, I can prioritize User Stories and refine/enrich the backlog, do project follow-up while acting as an Agile facilitator.",
    "actUX" : "I identify key personas and apply Design Thinking to create truly user-centric solutions. I create wireframes, prototypes or dynamic mock-ups using Business Analysis tools to design quality Apps or improve ergonomics according to a specific charter. If required, I can create and elaborate your Design System to guarantee an optimized user experience by ensuring the technical and visual coherence of the digital device.",
    "analysis" : "Analysis",
    "conception" : "Functional Design",
    "data" : "Data",
    "qual" : "Quality",
    "gestion" : "Project Management",
    "agile" : "Agile Facilitator",
    "design" : "Design System",
    "proto" : "Prototyping",
    "ux" : "User Experience",
    "dthink" : "Design Thinking",

    "recent" : "RECENT WORKS",
    "project1" : "FIFA Club Pro competition platform to promote e-Sport in amateur clubs in France. (Sold)",

    "needs" : "YOUR NEEDS",
    "describe-needs1" : "You can check whether your requirements match the profile you're looking for before contacting me.",
    "describe-needs2" : "Use the simulator to check if the profile you're looking for is the right one !",
    "orga" : "Organizational audit",
    "funct" : "Functional process audit/analysis",
    "market" : "Market research/analysis, Market watch",
    "require" : "Requirement description (Specify, Write, Model)",
    "innov" : "Functional or technical innovation",
    "services" : "Consulting services",
    "improve" : "Improve/plan business processes",
    "brain" : "Brainstorming (UX Workshop, User Questionnaire, etc.)",
    "workshops" : "Conducting functional workshops",
    "ref" : "Functional referent",
    "soluce" : "Definition/Validation of functional solution",
    "spe" : "Writing detailed functional specifications",
    "soft" : "Software quality control",
    "tests" : "Define the tests to be carried out",
    "follow" : "Functional acceptance follow-up",
    "project" : "Project management",
    "valWishlist" : "Validate",

    "POS" : "Project Owner Support",
    "FC" : "Functional Consultant",
    "BA" : "Business Analyst",

    "result" : "THE RESULT",
    "yourNeeds1" : "Your needs are best met by a ",
    "yourNeeds2" : ". Feel free to contact me !",
    "placeholderEmail" : "Email address",
    "placeholderName" : "Name",
    "placeholderDescription" : "Write here...",
    "describe" : "Describe your needs",
    "request" : "Send a request",


    "footer" : "Made with 💜 by THP · Omiage Copyright © 2024 · All Rights Reserved",
    }
  },
  fr: {
    translation: {
    "HOME" : "ACCUEIL",
    "ABOUT" : "À PROPOS",
    "WORK" : "WORK",
    "PORTFOLIO" : "PORTFOLIO",
    "CONTACT" : "CONTACT",

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

    "sectors" : "SECTEURS D'EXPÉRIENCE",
    "energy" : "Énergie",
    "luxe" : "Luxe",
    "bank" : "Banque/Assurance",
    "auto" : "Automobile",
    "years_experience": "{{count}} année(s) d'expérience",

    "activities" : "ACTIVITÉS",
    "actBA" : "Je vous accompagne dans votre transformation digitale en faisant le lien entre les équipes métiers et de développement, en réalisant des analyses fonctionnelles approfondies, en modélisant des solutions adaptées à vos besoins grâce à une conception centrée utilisateur, en assurant la qualité des développements via des critères d'acceptation et des tests d'acceptation, et formation des utilisateurs. En gestion de projet, je peux prioriser les User Stories et affiner/enrichir le backlog, faire le suivi de projet tout en agissant en tant que facilitateur Agile.",
    "actUX" : "J'identifie les personnalités clés et applique le Design Thinking pour créer des solutions véritablement centrées sur l'utilisateur. Je crée des wireframes, des prototypes ou des maquettes dynamiques à l'aide d'outils de Business Analysis pour concevoir des Apps de qualité ou améliorer l'ergonomie selon une charte précise. Si besoin, je peux créer et élaborer votre Design System pour garantir une expérience utilisateur optimisée en assurant la cohérence technique et visuelle du dispositif numérique.",
    "analysis" : "Analyse",
    "conception" : "Conception Fonctionnelle",
    "data" : "Données",
    "qual" : "Qualité",
    "gestion" : "Gestion projet",
    "agile" : "Facilitateur Agile",
    "design" : "Design System",
    "proto" : "Prototypage",
    "ux" : "Expérience utilisateur",
    "dthink" : "Design Thinking",

    "recent" : "TRAVAUX RÉCENTS",
    "project1" : "Plateforme de compétition FIFA Club Pro visant à promouvoir l'e-Sport dans les clubs amateurs en France. (Sold)",

    "needs" : "VOS BESOINS",
    "describe-needs1" : "Vous pouvez vérifier si vos besoins correspondent au profil recherché avant de me contacter.",
    "describe-needs2" : "Utilisez le simulateur pour vérifier si le profil que vous recherchez est le bon !",
    "orga" : "Audit organisationnel",
    "funct" : "Audit/Analyse de processus fonctionnel",
    "market" : "Étude/Analyse de marché, Veille commerciale",
    "require" : "Description de besoin (Spécifier, Rédiger, Modéliser)",
    "innov" : "Travaux d’innovation fonctionnelle ou technique",
    "services" : "Mission de conseil",
    "improve" : "Améliorer/Planifier les processus métiers",
    "brain" : "Brainstorming (Atelier UX, Questionnaire Utilisateur…)",
    "workshops" : "Mener des ateliers fonctionnels",
    "ref" : "Référent fonctionnel",
    "soluce" : "Définition/Validation de solution fonctionnelle",
    "spe" : "Rédaction de Spécifications fonctionnelles détaillées",
    "soft" : "Contrôle qualité logicielle",
    "tests" : "Définir les tests à mener",
    "follow" : "Suivi de recette fonctionnelle",
    "project" : "Gestion projet",
    "valWishlist" : "Valider",

    "POS" : "Support Responsable de Projet",
    "FC" : "Consultant Fonctionnel",
    "BA" : "Business Analyste",

    "result" : "LE RÉSULTAT",
    "yourNeeds1" : "Vos besoins seront satisfaits au mieux par un ",
    "yourNeeds2" : ". N'hésitez pas à me contacter !",
    "describe" : "Decrivez vos besoins",
    "placeholderEmail" : "Adresse email",
    "placeholderName" : "Nom",
    "placeholderDescription" : "Écrivez ici...",
    "request" : "Envoyer une demande",


    "footer" : "Fait avec 💜 par THP · Omiage Copyright © 2024 · Tous droits réservés",
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
