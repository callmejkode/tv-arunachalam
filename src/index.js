// React entry point
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 

// Remove HTML preloader
const removeLoader = () => {
  const loader = document.getElementById('global-loader');
  if (loader) loader.remove();
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  removeLoader() 
);
