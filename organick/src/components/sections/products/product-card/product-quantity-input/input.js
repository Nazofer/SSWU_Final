import React from 'react';
import styles from './input.module.scss';

const ProductQuantityInput = React.forwardRef((props, ref) => {
  
  return (
    <label className={styles['product-label']}>
      Quantity :
      <input
        ref={ref} 
        type='number'
        min={0}
        max={99}
        step={1}
        value={props.inputQuantity || 1}
        onChange={props.inputQuantityHandler}
        className={styles['product-input']}
      />
    </label>
  );
});

export default ProductQuantityInput;
