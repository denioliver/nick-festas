import { useLocation } from 'react-router-dom';
import Card from '../Card';
import styles from './catalogo.module.css';
import { useEffect, useState } from 'react';
import { listProducts } from '../../API/listProducts';
import { listTematicos } from '../../API/listTematicos';

const Catalogo = () => {
  const [category, setCategory] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/');
    let category = path[1];
    category = category.charAt(0).toUpperCase() + category.slice(1);
    setCategory(category);

    window.scrollTo(0, 0);
  }, [location]);
  
  const categorias = listProducts.map((product) => Object.keys(product)).flat();
  const tematicos = listTematicos.map((product) => Object.keys(product)).flat();

  if (categorias.includes(category)) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>{ category }</h1>
        </div>
        <div className={styles.cards}></div>
        {listProducts.map((product: { [key: string]: { description: string; img: string }[] }) => {
          if (Array.isArray(product[category])) {
            return product[category].map((item: { description: string; img: string }) => (
              <Card product={item.description} img={item.img} />
            ));
          }
        })}
      </div>
    );
  }

  if (tematicos.includes(category)) {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>{ category }</h1>
        </div>
        <div className={styles.cards}></div>
        {listTematicos.map((product: { [key: string]: { description: string; img: string }[] }) => {
          if (Array.isArray(product[category])) {
            return product[category].map((item: { description: string; img: string }) => (
              <Card product={item.description} img={item.img} />
            ));
          }
        })}
      </div>
    );
  }

};

export default Catalogo;