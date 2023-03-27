import React, { useState, useRef } from 'react';
import styles from './order-confirmation.module.scss';
import Button from '../../UI/Button/Button';
import { Heading } from '../../UI/Typography/typography';
import WidthContainer from '../../UI/WidthContainer/container';
import Form from './order-form/order-form';
import OrderElement from './order-form/order-element/order-element';
import { useSelector, useDispatch } from 'react-redux';
const Order = (props) => {
  const [isOrderBtnClicked, setIsOrderBtnClicked] = useState(false);

  const toOrderHandler = (e) => {
    e.preventDefault();
    setIsOrderBtnClicked(true);
  };

  const cartCounter = useSelector((state) => state.cartCounter);
  const cart = useSelector((state) => state.cart);
  const productsAmount = useRef();
  const dispatch = useDispatch();

  console.log('cart', cart);
  console.log('cart counter', cartCounter);

  const OrderedProductsList = cart.map((product) => (
    <OrderElement
      //type={product.type}
      name={product.name}
      price={product.price}
      discount={product.discount}
      // onOpenModal={openModalHandler}
      // onSelectItem={selectProductHandler}
      key={product.id}
      id={product.id}
    />
  ));

  const bill = cart.reduce((acc, curr) => {
    acc.price += +curr.price * +curr.quantity;
    acc.discount += +curr.discount * +curr.quantity;
    return acc;
  }, {price: 0, discount: 0});

  return (
    <section className={styles['order']}>
      {/* <OrderElement name={props.name} price={props.price} discount={props.discount}/> */}
      <WidthContainer className={styles['order__list']}>{OrderedProductsList}</WidthContainer>
      <WidthContainer className={styles['order__total']}>
        <Heading className={styles['order__total-cost']}>
          {`Total cost: $${(bill.price - bill.discount)}`}
        </Heading>
        <Heading className={styles['order__total-cost']}>
          {`Discount: $${(bill.discount)}`}
        </Heading>
      </WidthContainer>

      {!isOrderBtnClicked && (
        <Button
          showArrow={true}
          className={styles['order-to']}
          onClick={toOrderHandler}
        >
          To order
        </Button>
      )}
      {isOrderBtnClicked && <Form />}
    </section>
  );
};

export default Order;
