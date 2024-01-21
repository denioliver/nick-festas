import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Salgadeiras from '../components/Salgadeiras';
import Cachepot from '../components/Cachepot';
import Forminhas from '../components/Forminhas';
import Topos from '../components/Topos';
import Faixas from '../components/Faixas';
import Piramides from '../components/Piramides';

function Content() {
  return (
    <section>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/salgadeira" element={ <Salgadeiras /> } />
        <Route path="/cachepot" element={ <Cachepot /> } />
        <Route path="/forminhas" element={ <Forminhas /> } />
        <Route path="/topos" element={ <Topos /> } />
        <Route path="/faixas" element={ <Faixas /> } />
        <Route path="/piramides" element={ <Piramides /> } />
      </Routes>
    </section>
  );
}

export default Content;
