import React, { useEffect, useState } from 'react';
import styles from './products-modal.module.scss';
import { ReactComponent as Rating } from '../../../../img/5-stars.svg';
import { Heading, Paragraph } from '../../../UI/Typography/typography';
import ProductPrice from '../product-card/product-price/product-price';
import Button from '../../../UI/Button/Button';
import WidthContainer from '../../../UI/WidthContainer/container';
import ProductQuantityInput from '../product-card/product-quantity-input/input';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../../redux/productsSlice';

const ProductForm = ({ onOpenModal, selectedProduct }) => {
  const dispatch = useDispatch();
  const [inputQuantity, setInputQuantity] = useState(1);
  const [productInfo, setProductInfo] = useState({
    activeButton: 'desc-btn',
    text: selectedProduct.description,
  });

  function handleButtonClick(button, text) {
    setProductInfo({ activeButton: button, text: text });
  }

  const inputQuantityHandler = (e) => {
    setInputQuantity(+e.target.value);
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);

  const addToCartHandler = (e) => {
    e.preventDefault();
    if (inputQuantity < 1) return;
    const addedItem = {
      name: selectedProduct.name,
      price: selectedProduct.price,
      discount: selectedProduct.discount,
      quantity: inputQuantity,
      id: selectedProduct.id,
      url: selectedProduct.url,
    };

    dispatch(addItemToCart(addedItem));
    // console.log('counter:', cartCounter);
    // console.log('cart:', cart);
  };

  return (
    <div className={styles.product}>
      <WidthContainer className={styles['product__container']}>
        <div className={styles['product__details']}>
          <div
            style={{ backgroundImage: `url(${selectedProduct.url})` }}//refactor with img
            className={styles['product__details-img']}
          ></div>
          <div className={styles['product__details-info']}>
            <Heading className={styles['product-name']}>
              {selectedProduct.name}
            </Heading>
            <Rating />
            <br />
            <ProductPrice
              price={selectedProduct.price}
              discount={selectedProduct.discount}
            />
            <Paragraph className={styles['product-paragraph']}>
              {selectedProduct.overview}
            </Paragraph>
            <div className={styles['product__controls']}>
              <ProductQuantityInput
                inputQuantity={inputQuantity}
                inputQuantityHandler={inputQuantityHandler}
              />
              <Button
                className={styles['product__controls-btn']}
                showArrow
                onClick={addToCartHandler}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
        <div className={styles['product__description']}>
          <div className={styles['product__buttons']}>
            <Button
              className={
                productInfo.activeButton === 'desc-btn'
                  ? styles['product__buttons--active']
                  : ''
              }
              onClick={() =>
                handleButtonClick('desc-btn', selectedProduct.description)
              }
            >
              Product Description
            </Button>
            <Button
              className={
                productInfo.activeButton === 'add-btn'
                  ? styles['product__buttons--active']
                  : ''
              }
              onClick={() =>
                handleButtonClick('add-btn', selectedProduct.additionalInfo)
              }
            >
              Additional Info
            </Button>
          </div>
          <Paragraph className={styles['product__description-text']}>
            {productInfo.text}
          </Paragraph>
        </div>
        <Button onClick={onOpenModal} className={styles['product-close']}>
          X
        </Button>
      </WidthContainer>
    </div>
  );
};

export default ProductForm;
