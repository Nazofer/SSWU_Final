import React from 'react';

import styles from './product-price.module.scss';

const ProductPrice = props => {
  return (
    <span className={`${styles.price} ${props.className || ''}`}>
      <span className={`${styles.discount} ${props.className || ''}`}>${(+props.price).toFixed(2)}</span>$
      {(+props.price - +props.discount).toFixed(2)}
    </span>
  );
};

export default ProductPrice;