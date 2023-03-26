import React from 'react';
import styles from './input.module.scss';

const ProductQuantityInput = () => {
  return (
    <label className={styles['product-label']}>
      Quantity :
      <input
        type='number'
        min={0}
        max={99}
        step={1}
        className={styles['product-input']}
      />
    </label>
  );
};

export default ProductQuantityInput;
