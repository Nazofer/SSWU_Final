import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './product-card.module.scss';

// import productImg from '../../../img/products-broccoli.png';
import { ReactComponent as Rating } from '../../../img/5-stars.svg';

const ProductCard = props => {
  return (
    <div className={styles.product}>
      <Button className={styles['product-tag']}>{props.type}</Button>
      <div className={styles['product-img']}></div>
      <h2 className={styles['product-heading']}>{props.name}</h2>
      <hr className={styles['product-separator']} />
      <p className={styles['product__parameters']}>
        <span className={styles['price']}>
          <span className={styles['discount']}>
            ${(+props.price).toFixed(2)}
          </span>
          ${(+props.price - +props.discount).toFixed(2)}
        </span>
        <Rating className={styles['rate']}/>
      </p>
    </div>
  );
};

export default ProductCard;