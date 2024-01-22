import '../styles/Topos.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { listProducts } from '../ts/listProducts';

function Topos() {
  const [openProduct, setOpenProduct] = React.useState(null);

  const handleOpen = (product: any) => {
    setOpenProduct(product);
  };

  const handleClose = () => {
    setOpenProduct(null);
  };

  return (
    <section className="topos-container">
      {listProducts.map((products) => products.Topos.flatMap((product) => (
        <div className="card-topos" key={ product.product }>
          <h3>{product.product}</h3>
          <img src={ product.img } alt="" />
          <p>{product.description}</p>
          <p>
            <b>R$:</b>
            {' '}
            {product.price}
          </p>
          <button
            className="btnOpenImg"
            onClick={ () => handleOpen(product) }
          >
            Abrir imagem
          </button>
          <Modal
            open={ openProduct === product }
            onClose={ handleClose }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box>
              <Typography id="modal-modal-description" sx={ { mt: 2 } }>
                <img id="imgModalMobile" src={ product.img } alt="" />
              </Typography>
              <Typography
                onClick={ handleClose }
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                <p id="closeImg">
                  X
                </p>
              </Typography>
            </Box>
          </Modal>
        </div>
      )))}
    </section>
  );
}

export default Topos;
