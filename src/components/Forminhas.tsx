import { listProducts } from '../ts/listProducts';
import '../styles/Forminhas.css';

function Forminhas() {
  return (
    <section className="forminhas-container">
      { listProducts
        .map((products) => products.Forminhas
          .flatMap((product) => {
            return (
              <div className="card-forminhas">
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

export default Forminhas;
