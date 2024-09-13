import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import Content from './content/Content.tsx';

import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Content />
      <Footer />
    </HashRouter>
  </React.StrictMode>,
);
