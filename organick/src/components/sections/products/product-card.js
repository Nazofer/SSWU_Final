import React from 'react';
import Button from '../../UI/Button/Button';
import styles from './product-card.module.scss';
import { Heading } from '../../UI/Typography/typography';
// import productImg from '../../../img/products-broccoli.png';
import { ReactComponent as Rating } from '../../../img/5-stars.svg';
import ProductPrice from './product-price';

const ProductCard = ({
  type,
  name,
  price,
  discount,
  onOpenModal,
  onSelectItem,
  id,
  url,
}) => {
  const selectProduct = () => {
    onOpenModal();
    onSelectItem(id);
  };

  //console.log('url:', url);

  return (
    <div className={styles.product} onClick={selectProduct}>
      <Button className={styles['product-tag']}>{type}</Button>
      <div
        style={{ backgroundImage: `url(${url})` }}
        className={styles['product-img']}
      ></div>
      <div className={styles['product__description']}>
        <Heading className={styles['product__description-heading']}>{name}</Heading>
        <hr className={styles['product__description-separator']} />
        <p className={styles['product__description__parameters']}>
          <ProductPrice price={price} discount={discount} />
          <Rating className={styles['rate']} />
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
