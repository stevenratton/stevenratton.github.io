import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import App from './App.jsx';
import './i18n';

const RECAPTCHA_KEY = '';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
        <App />
      </GoogleReCaptchaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
