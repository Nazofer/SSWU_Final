import React from 'react';
import styles from './order-confirmation.module.scss';
//

const Order = (props) => {
  return (
    <section className={styles['order']}>
      <div className={styles['product']}>
        <div className={styles['product-img']}></div>
        <div className={styles['product-wrapper']}>
          <h2 className={styles['product-heading']}>{props.name}</h2>
          <span className={styles['product-price']}>
            <span className={styles['product-discount']}>
              ${(+props.price).toFixed(2)}
            </span>
            ${(+props.price - +props.discount).toFixed(2)}
          </span>
        </div>
        <div className={styles['product__quantity']}>
          <label className={styles['product__quantity-label']}>
            Quantity:</label>
            <input
              type='number'
              className={styles['product__quantity-input']}
            />
          
        </div>
        <a href='/' className={styles['order-close']}>
          X
        </a>
      </div>
      <div className={styles['order__total']}>
        <h2 className={styles['order__total-cost']}>
          {`Total cost: $${(+props.price - +props.discount).toFixed(2)}`}
        </h2>
        <h2 className={styles['order__total-cost']}>
          {`Discount: $${(+props.discount).toFixed(2)}`}
        </h2>
      </div>
      <a href='/' className={styles['order-to']}>
        To order
      </a>
    </section>
  );
};

export default Order;
