import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { FormContextProvider } from './Context/FormContext.tsx'; 
import ReactGA from 'react-ga';

// Initialize Google Analytics with your tracking ID
ReactGA.initialize('G-ZQ22G9JPFD');


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </React.StrictMode>,
);
