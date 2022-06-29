import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //StricMode => Ayuda a identificar componentes con problemas => https://reactjs.org/docs/strict-mode.html
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
