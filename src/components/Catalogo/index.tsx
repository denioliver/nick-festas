import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../Card';
import styles from './catalogo.module.css';
import { listProducts } from '../../API/listProducts';
import { listTematicos } from '../../API/listTematicos';

function Catalogo() {
  const [category, setCategory] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/');
    let categor = path[1];
    categor = categor.charAt(0).toUpperCase() + categor.slice(1);
    setCategory(categor);

    window.scrollTo(0, 0);
  }, [location]);

  const categorias = listProducts.map((product) => Object.keys(product)).flat();
  const tematicos = listTematicos.map((product) => Object.keys(product)).flat();

  if (categorias.includes(category)) {
    return (
      <div className={ styles.container }>
        <div className={ styles.title }>
          <h1>{ category }</h1>
        </div>
        <div className={ styles.cards } />
        {listProducts
          .map((product: { [key: string]: { description: string; img: string }[] }) => {
            if (Array.isArray(product[category])) {
              return product[category]
                .map((item: { description: string; img: string }, index: number) => (
                  <Card key={ index } product={ item.description } img={ item.img } />
                ));
            }
            return null; // Add this line to return a value at the end of the arrow function
          })}
      </div>
    );
  }

  if (tematicos.includes(category)) {
    return (
      <div className={ styles.container }>
        <div className={ styles.title }>
          <h1>{ category }</h1>
        </div>
        <div className={ styles.cards } />
        {listTematicos
          .map((product: { [key: string]: { description: string; img: string }[] }) => {
            if (Array.isArray(product[category])) {
              return product[category]
                .map((item: { description: string; img: string }, index: number) => (
                  <Card key={ index } product={ item.description } img={ item.img } />
                ));
            }
            return null;
          })}
      </div>
    );
  }
}

export default Catalogo;
