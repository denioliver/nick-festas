import { HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './content/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Content />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
