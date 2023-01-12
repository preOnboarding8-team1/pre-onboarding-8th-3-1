import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { DataContextProvider } from './store/data-context';
import { FocusContextProvider } from './store/focus-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FocusContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </FocusContextProvider>
  </React.StrictMode>
);
