import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { DropzoneProvider } from './contexts/DropzoneContext';

ReactDOM.render(
  <React.StrictMode>
    <DropzoneProvider>
      <App />
    </DropzoneProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
