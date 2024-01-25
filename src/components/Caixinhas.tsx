/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import '../styles/Caixinhas.css';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { BiCollapse } from 'react-icons/bi';
import { listProducts } from '../ts/listProducts';

function Caixinhas() {
  const [openProduct, setOpenProduct] = React.useState(null);

  const handleOpen = (product: any) => {
    setOpenProduct(product);
  };

  const handleClose = () => {
    setOpenProduct(null);
  };

  return (
    <section className="caixinhas-container">
      {listProducts.map((products) => products.Caixinhas.flatMap((product) => (
        <div className="card-caixinhas" key={ product.product }>
          <h3>{product.product}</h3>
          <img
            src={ product.img }
            onClick={ () => handleOpen(product) }
            alt=""
          />
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
                <img id="imgModal-Caixinhas" src={ product.img } alt="" />
              </Typography>
              <Typography
                onClick={ handleClose }
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                <BiCollapse id="closeImg" />
              </Typography>
            </Box>
          </Modal>
        </div>
      )))}
    </section>
  );
}

export default Caixinhas;
