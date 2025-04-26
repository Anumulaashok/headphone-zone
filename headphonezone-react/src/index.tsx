import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; // Basic CRA styles - REMOVED TO RESOLVE CONFLICT
import './assets/styles/OTP.css';
import './assets/styles/buy2nd.css';
import './assets/styles/buyHome.css';
import './assets/styles/cart.css';
import './assets/styles/earphone.css';
import './assets/styles/index.css'; // Keep this migrated index.css
import './assets/styles/login.css';
import './assets/styles/navbar.css';
import './assets/styles/product2.css';
import './assets/styles/signup.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
