import { listProducts } from '../ts/listProducts';
import '../styles/Faixas.css';

function Faixas() {
  return (
    <section className="faixas-container">
      { listProducts
        .map((products) => products.Faixas
          .flatMap((product) => {
            return (
              <div className="card-faixas">
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

export default Faixas;
