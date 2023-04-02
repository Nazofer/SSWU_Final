import React from 'react';
import styles from './product-price.module.scss';
import classNames from 'classnames';

const ProductPrice = ({ price, discount, className }) => {
  return (
    <span className={classNames(styles.price, className)}>
      <span className={classNames(styles.discount, className)}>
        ${(+price).toFixed(2)}
      </span>
      ${(+price - +discount).toFixed(2)}
    </span>
  );
};

export default ProductPrice;
