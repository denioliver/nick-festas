/* eslint-disable max-lines */

import imgPainelPascoa from '../img/imgPaineis/painel-pascoa.jpeg';
import imgPainelCarnaval from '../img/imgPaineis/painel-carnaval.jpeg';
import imgCachepotPascoa from '../img/imgCachepot/cachepot-pascoa.jpeg';

export const listTematicos = [
  {
    Pascoa: [
      {
        product: 'Cachepot',
        price: '1,60 und',
        img: imgCachepotPascoa,
        description: 'Pascoa',
      },
      {
        product: 'Painel',
        price: '7,90 und',
        img: imgPainelPascoa,
        description: 'Pascoa',
      },
    ],
    Carnaval: [
      {
        product: 'Painel',
        price: '7,90 und',
        img: imgPainelCarnaval,
        description: 'Carnaval',
      },
    ],
  },
];
