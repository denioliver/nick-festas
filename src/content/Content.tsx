import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Salgadeiras from '../components/Salgadeiras';
import Cachepot from '../components/Cachepot';

function Content() {
  return (
    <section>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/salgadeira" element={ <Salgadeiras /> } />
        <Route path="/cachepot" element={ <Cachepot /> } />
      </Routes>
    </section>
  );
}

export default Content;
