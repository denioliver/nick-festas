import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './content/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <React.StrictMode>
        <HashRouter>
          <Header />
          <Content />
          <Footer />
        </HashRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
