import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // Optional, only for performance tracking



// Creating the root element using React 18's `createRoot`
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside React.StrictMode for development best practices
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to track performance, you can log or send results to an analytics endpoint
reportWebVitals(); // Optional: remove if you're not interested in performance tracking
