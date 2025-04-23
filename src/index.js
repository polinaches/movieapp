import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('lol');
const index = createRoot(container);

index.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)