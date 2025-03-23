import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import Loader from './components/Loader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Loader size="l" />
      <Loader size="m" />
      <Loader size="s" />
      <Loader />
    </div>
  </React.StrictMode>
);
