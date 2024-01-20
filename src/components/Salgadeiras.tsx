import { listProducts } from '../ts/listProducts';
import '../styles/Salgadeira.css';

function Salgadeiras() {
  return (
    <section className="salgadeiras-container">
      { listProducts
        .map((products) => products.Salgadeira
          .flatMap((product) => {
            return (
              <div className="card-salgadeiras">
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

export default Salgadeiras;
