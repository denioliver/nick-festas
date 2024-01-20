import { listProducts } from '../ts/listProducts';
import '../styles/Cachepot.css';

function Cachepot() {
  return (
    <section className="cachepot-container">
      { listProducts
        .map((products) => products.Cachepot
          .flatMap((product) => {
            return (
              <div className="card-cachepot">
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

export default Cachepot;
