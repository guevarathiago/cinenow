// 3rd parties
import React from 'react';
import ReactDOM from 'react-dom/client';

// App
import { AppRouter } from './AppRouter';

// Styles
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
