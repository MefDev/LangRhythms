import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Fonts
import "@fontsource/raleway";
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/900.css';
import "@fontsource/open-sans";
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
