import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Signup from './components/signup';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>
);