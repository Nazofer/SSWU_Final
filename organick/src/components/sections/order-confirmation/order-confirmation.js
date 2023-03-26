import React, { useState } from 'react';
import styles from './order-confirmation.module.scss';
import Button from '../../UI/Button/Button';
import { Heading } from '../../UI/Typography/typography';
import WidthContainer from '../../UI/WidthContainer/container';
import Form from './order-form/order-form';
import ProductQuantityInput from '../products/product-quantity-input/input';

const Order = (props) => {
  const [isOrderBtnClicked, setIsOrderBtnClicked] = useState(false);

  const toOrderHandler = (e) => {
    e.preventDefault();
    setIsOrderBtnClicked(true);
  };

  return (
    <section className={styles['order']}>
      <WidthContainer className={styles['product']}>
        <div className={styles['product-img']}></div>
        <div className={styles['product-wrapper']}>
          <Heading className={styles['product-name']}>{props.name}</Heading>
          <span className={styles['product-price']}>
            <span className={styles['product-discount']}>
              ${(+props.price).toFixed(2)}
            </span>
            ${(+props.price - +props.discount).toFixed(2)}
          </span>
        </div>
        <div className={styles['product__quantity']}>
          <ProductQuantityInput/>
        </div>
        <Button className={styles['order-close']}>X</Button>
      </WidthContainer>
      <WidthContainer className={styles['order__total']}>
        <Heading className={styles['order__total-cost']}>
          {`Total cost: $${(+props.price - +props.discount).toFixed(2)}`}
        </Heading>
        <Heading className={styles['order__total-cost']}>
          {`Discount: $${(+props.discount).toFixed(2)}`}
        </Heading>
      </WidthContainer>

      <Button
        showArrow={true}
        className={styles['order-to']}
        onClick={toOrderHandler}
      >
        To order
      </Button>
      {isOrderBtnClicked && <Form />}
    </section>
  );
};

export default Order;
