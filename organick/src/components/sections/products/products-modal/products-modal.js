import React from 'react';
import styles from './products-modal.module.scss';
import { ReactComponent as Rating } from '../../../../img/5-stars.svg';
import { Heading, Paragraph } from '../../../UI/Typography/typography';
import ProductPrice from '../product-price';
import Button from '../../../UI/Button/Button';
import WidthContainer from '../../../UI/WidthContainer/container';
import ProductQuantityInput from '../product-quantity-input/input';

const ProductForm = () => {
  return (
    <div className={styles.product}>
      <WidthContainer>
        <div className={styles['product__details']}>
          <div className={styles['product__details-img']}></div>
          {/* FLEX CONTAINER */}
          <div className={styles['product__details-info']}>
            <Heading className={styles['product-name']}>
              Health Pistachios
            </Heading>
            <Rating />
            <br />
            <ProductPrice price={20} discount={7} />
            <Paragraph className={styles['product-paragraph']}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Paragraph>
            <div className={styles['product__controls']}>
              <ProductQuantityInput />
              <Button showArrow={true}>Add To Cart</Button>
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
      </WidthContainer>
    </div>
  );
};

export default ProductForm;
