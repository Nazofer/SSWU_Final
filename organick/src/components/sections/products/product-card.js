import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './product-card.module.scss';
import { Heading } from '../../UI/Typography/typography';
// import productImg from '../../../img/products-broccoli.png';
import { ReactComponent as Rating } from '../../../img/5-stars.svg';
import ProductPrice from './product-price';

const ProductCard = ({ type, name, price, discount, onClick}) => {
  return (
    <div className={styles.product} onClick={onClick}>
      <Button className={styles['product-tag']}>{type}</Button>
      <div className={styles['product-img']}></div>
      <Heading className={styles['product-heading']}>{name}</Heading>
      <hr className={styles['product-separator']} />
      <p className={styles['product__parameters']}>
        <ProductPrice price={price} discount={discount}/>
        <Rating className={styles['rate']} />
      </p>
    </div>
  );
};

export default ProductCard;
