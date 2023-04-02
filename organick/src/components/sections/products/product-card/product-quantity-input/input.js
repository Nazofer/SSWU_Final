import React from 'react';
import styles from './input.module.scss';
import classNames from 'classnames';

const ProductQuantityInput = React.forwardRef((props, ref) => {
  return (
    <label className={styles['product-label']}>
      Quantity:
      <input
        ref={ref}
        type='number'
        min={0}
        max={99}
        step={1}
        value={props.inputQuantity}
        onChange={props.inputQuantityHandler}
        className={classNames(styles['product-input'], {
          [styles['product-input--invalid']]: props.inputQuantity < 1,
        })}
      />
    </label>
  );
});

export default ProductQuantityInput;
