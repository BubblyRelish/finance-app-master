import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import Login from './pages/signup'


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App/>
 </React.StrictMode>
);