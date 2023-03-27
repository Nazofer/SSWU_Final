import React, { useRef } from 'react';
import styles from './products-modal.module.scss';
import { ReactComponent as Rating } from '../../../../img/5-stars.svg';
import { Heading, Paragraph } from '../../../UI/Typography/typography';
import ProductPrice from '../product-price';
import Button from '../../../UI/Button/Button';
import WidthContainer from '../../../UI/WidthContainer/container';
import ProductQuantityInput from '../product-quantity-input/input';

import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  increaseCartCounter,
} from '../../../../redux/cartSlice.js';


const ProductForm = ({ onOpenModal, selectedProduct }) => {
  const cartCounter = useSelector(state => state.cartCounter);
  const cart = useSelector(state => state.cart);
  const productsAmount = useRef();
  const dispatch = useDispatch();

  const addToCartHandler = e => {
    e.preventDefault();
    const selectedProductAmount = +productsAmount.current.value;
    dispatch(increaseCartCounter(selectedProductAmount));
    const addedItem = {
      name: selectedProduct.name,
      price: selectedProduct.price,
      discount: selectedProduct.discount,
      quantity: selectedProductAmount,
      id: selectedProduct.id,
    };

    dispatch(addItemToCart(addedItem));
    console.log('counter:', cartCounter);
    console.log('cart:', cart);
  };

  return (
    <div className={styles.product}>
      <WidthContainer className={styles['product__container']}>
        <div className={styles['product__details']}>
          <div className={styles['product__details-img']}></div>
          <div className={styles['product__details-info']}>
            <Heading className={styles['product-name']}>
              {selectedProduct.name}
            </Heading>
            <Rating />
            <br />
            <ProductPrice price={selectedProduct.price} discount={selectedProduct.discount} />
            <Paragraph className={styles['product-paragraph']}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Paragraph>
            <div className={styles['product__controls']}>
              <ProductQuantityInput ref={productsAmount}/>
              <Button showArrow={true} onClick={addToCartHandler}>Add To Cart</Button>
            </div>
          </div>
        </div>
        <div className={styles['product__description']}>
          <div className={styles['product__buttons']}>
            <Button>Product Description</Button>
            <Button>Additional Info</Button>
          </div>
          <Paragraph>
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8-10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </Paragraph>
        </div>
        <Button onClick={onOpenModal} className={styles['product-close']}>
          Х
        </Button>
      </WidthContainer>
    </div>
  );
};

export default ProductForm;
