import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);