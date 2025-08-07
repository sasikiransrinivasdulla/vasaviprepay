import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: using new root API
import App from './App';
import './index.css';

// Create root and render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);