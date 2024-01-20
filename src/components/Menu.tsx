import '../styles/Menu.css';
import { Link } from 'react-router-dom';
import { listProducts } from '../ts/listProducts';

function Menu() {
  return (
    <nav className="menu-container">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        {
            listProducts.map((category, index) => {
              return Object.keys(category).map((key) => (
                <li key={ `${index}-${key}` }>
                  <Link to={ `/${key.toLowerCase()}` }>{key}</Link>
                </li>
              ));
            })
          }
      </ul>
    </nav>
  );
}

export default Menu;
