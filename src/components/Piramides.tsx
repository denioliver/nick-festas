import { listProducts } from '../ts/listProducts';
import '../styles/Piramides.css';

function Piramides() {
  return (
    <section className="piramides-container">
      { listProducts
        .map((products) => products.Piramides
          .flatMap((product) => {
            return (
              <div className="card-piramides">
                <h3>{ product.product }</h3>
                <img src={ product.img } alt="" />
                <p>{ product.description }</p>
                <p>
                  <b>R$:</b>
                  {' '}
                  { product.price }
                </p>
              </div>
            );
          })) }
    </section>
  );
}

export default Piramides;
