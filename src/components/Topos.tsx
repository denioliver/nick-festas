import { listProducts } from '../ts/listProducts';
import '../styles/Topos.css';

function Topos() {
  return (
    <section className="topos-container">
      { listProducts
        .map((products) => products.Topos
          .flatMap((product) => {
            return (
              <div className="card-topos">
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

export default Topos;
