import React, { useState } from 'react';
import styles from './input.module.scss';

const ProductQuantityInput = React.forwardRef((props, ref) => {
  const [inputQuantity, setInputQuantity] = useState(props.quantity || 1);
  
  const inputQuantityHandler = (e) => {
    setInputQuantity(e.target.value);
  }

  return (
    <label className={styles['product-label']}>
      Quantity :
      <input
        ref={ref} 
        type='number'
        min={0}
        max={99}
        step={1}
        value={inputQuantity}
        onChange={inputQuantityHandler}
        className={styles['product-input']}
      />
    </label>
  );
});

export default ProductQuantityInput;
