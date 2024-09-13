import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Catalogo from '../components/Catalogo';
import { listProducts } from '../API/listProducts';
import { listTematicos } from '../API/listTematicos';

function Contents() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        {listProducts.map((category, index) => {
          return Object.keys(category).map((key) => (
            <Route
              key={ `${index}-${key}` }
              path={ `/${key.toLowerCase()}` }
              element={ <Catalogo /> }
            />
          ));
        })}
        {listTematicos.map((category, index) => {
          return Object.keys(category).map((key) => (
            <Route
              key={ `${index}-${key}` }
              path={ `/${key.toLowerCase()}` }
              element={ <Catalogo /> }
            />
          ));
        })}
      </Routes>
    </div>
  );
}

export default Contents;
