import React, { useState } from 'react';
import styles from './order-confirmation.module.scss';
import Button from '../../UI/Button/Button';
import { Heading } from '../../UI/Typography/typography';
import WidthContainer from '../../UI/WidthContainer/container';
import Form from './order-form/order-form';
import OrderElement from './order-form/order-element/order-element';

const Order = (props) => {
  const [isOrderBtnClicked, setIsOrderBtnClicked] = useState(false);

  const toOrderHandler = (e) => {
    e.preventDefault();
    setIsOrderBtnClicked(true);
  };

  return (
    <section className={styles['order']}>
      <OrderElement name={props.name} price={props.price} discount={props.discount}/>
      <WidthContainer className={styles['order__total']}>
        <Heading className={styles['order__total-cost']}>
          {`Total cost: $${(+props.price - +props.discount).toFixed(2)}`}
        </Heading>
        <Heading className={styles['order__total-cost']}>
          {`Discount: $${(+props.discount).toFixed(2)}`}
        </Heading>
      </WidthContainer>

      {!isOrderBtnClicked && <Button
        showArrow={true}
        className={styles['order-to']}
        onClick={toOrderHandler}
      >
        To order
      </Button>}
      {isOrderBtnClicked && <Form />}
    </section>
  );
};

export default Order;
