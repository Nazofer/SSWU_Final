import React from 'react'; 
import styles from './order-element.module.scss';
import WidthContainer from '../../../../UI/WidthContainer/container';
import { Heading } from '../../../../UI/Typography/typography';
import ProductQuantityInput from '../../../products/product-quantity-input/input';
import Button from '../../../../UI/Button/Button';
import ProductPrice from '../../../products/product-price';

 const OrderElement = (props) => {
  return (
    <WidthContainer className={styles['product']}>
        <div className={styles['product-img']}></div>
        <div className={styles['product-wrapper']}>
          <Heading className={styles['product-name']}>{props.name}</Heading>
          <ProductPrice className={styles['product-price']} price={props.price} discount={props.discount}/>
        </div>
        <div className={styles['product__quantity']}>
          <ProductQuantityInput/>
        </div>
        <Button className={styles['product-remove']}>X</Button>
      </WidthContainer>
  );
 } 

 export default OrderElement;