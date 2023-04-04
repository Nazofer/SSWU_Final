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
import classNames from 'classnames';
import ProductImg from '../product-card/product-image/product-image';

const ProductForm = ({
  onOpenModal,
  selectedProduct: {
    name,
    price,
    discount,
    id,
    url,
    description,
    overview,
    additionalInfo,
  },
}) => {
  const dispatch = useDispatch();
  const [inputQuantity, setInputQuantity] = useState(1);
  const [productInfo, setProductInfo] = useState({
    activeButton: 'desc-btn',
    text: description,
  });

  function handleButtonClick(button, text) {
    setProductInfo({ activeButton: button, text: text});
  }

  const inputQuantityHandler = (e) => {
    setInputQuantity(+e.target.value);
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, []);

  const addToCartHandler = () => {
    if (inputQuantity < 1) return;
    const addedItem = {
      name: name,
      price: price,
      discount: discount,
      quantity: inputQuantity,
      id: id,
      url: url,
    };
    dispatch(addItemToCart(addedItem));
    onOpenModal();
  };

  return (
    <div className={styles.product}>
      <WidthContainer className={styles['product__container']}>
        <div className={styles['product__details']}>
          <ProductImg url={url} className={styles['product__details-img']}/>
          <div className={styles['product__details-info']}>
            <Heading className={styles['product-name']}>{name}</Heading>
            <Rating />
            <br />
            <ProductPrice price={price} discount={discount} />
            <Paragraph className={styles['product-paragraph']}>
              {overview}
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
              className={classNames({
                [styles['product__buttons--active']]:
                  productInfo.activeButton === 'desc-btn',
              })}
              onClick={() => handleButtonClick('desc-btn', description)}
            >
              Product Description
            </Button>
            <Button
              className={classNames({
                [styles['product__buttons--active']]:
                  productInfo.activeButton === 'add-btn',
              })}
              onClick={() => handleButtonClick('add-btn', additionalInfo)}
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
