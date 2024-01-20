import React, { useState, useEffect } from 'react';
import '../styles/Menu.css';
import { Link } from 'react-router-dom';
import { listProducts } from '../ts/listProducts';

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
      <ul>
        <span id="burguer" className="material-symbols-outlined">
          menu
        </span>
        <li className="menu-tela">
          <Link to="/">Inicio</Link>
        </li>
        {listProducts.map((category, index) => {
          return Object.keys(category).map((key) => (
            <li className="menu-tela" key={ `${index}-${key}` }>
              <Link to={ `/${key.toLowerCase()}` }>
                {key}
              </Link>
            </li>
          ));
        })}
        <li className="menu-mobile" style={ { display: menuMobileDisplay } }>
          <Link to="/" onClick={ hideMenuMobile }>
            Inicio
          </Link>
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
      </ul>
    </nav>
  );
}

export default Menu;
