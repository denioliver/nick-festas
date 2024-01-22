import { useState, useEffect } from 'react';
import '../styles/Menu.css';
import { Link } from 'react-router-dom';
import { listProducts } from '../ts/listProducts';
import { listTematicos } from '../ts/listTematicos';

function Menu() {
  const [menuMobileDisplay, setMenuMobileDisplay] = useState('none');

  const toggleMenuMobile = () => {
    setMenuMobileDisplay((prevDisplay) => (prevDisplay === 'none' ? 'block' : 'none'));
  };

  const hideMenuMobile = () => {
    setMenuMobileDisplay('none');
  };

  useEffect(() => {
    const burguer = document.querySelector('#burguer');

    const handleClick = () => {
      toggleMenuMobile();
    };

    burguer?.addEventListener('click', handleClick);

    return () => {
      burguer?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <nav className="menu-container">
      <ul id="ulMenu">
        <div id="burguer">
          <p>Produtos</p>
          <span className="material-symbols-outlined">
            expand_more
          </span>
        </div>
        <li className="menu-tela">
          <Link to="/">Inicio</Link>
          <span className="material-symbols-outlined">
            home
          </span>
        </li>
      </ul>
      <ul className="menu-mobile" style={ { display: menuMobileDisplay } }>
        <div id="listDiv">
          <li>
            {listProducts.map((category, index) => {
              return Object.keys(category).map((key) => (
                <li className="menu-mobile-link" key={ `${index}-${key}` }>
                  <Link to={ `/${key.toLowerCase()}` } onClick={ hideMenuMobile }>
                    {key}
                  </Link>
                </li>
              ));
            })}
          </li>
          <li id="tematicos">
            <p>
              Temáticos
            </p>
            {listTematicos.map((tematico, indici) => {
              return Object.keys(tematico).map((keyTema) => (
                <li className="menu-mobile-link" key={ `${indici}-${keyTema}` }>
                  <Link to={ `/${keyTema.toLowerCase()}` } onClick={ hideMenuMobile }>
                    {keyTema}
                  </Link>
                </li>
              ));
            })}
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Menu;
