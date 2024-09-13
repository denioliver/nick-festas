import style from './card.module.css';

type Product = {
  product: string;
  img: string;
};

function Card(props: Product) {
  const { product, img } = props;

  return (
    <div className={ style.container }>
      <p>{ product }</p>
      <img src={ img } alt="" />
    </div>
  );
}

export default Card;
