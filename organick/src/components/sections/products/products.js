import React from 'react';
import ProductCard from './product-card';

import styles from './products.module.scss';

const Products = () => {
  return (
    <div className={styles.categories}>
      <h3 className={styles['categories-subheading']}>Categories</h3>
      <h2 className={styles['categories-heading']}>Our Products</h2>
      <div className={styles['categories__container']}>
        <ProductCard
          type="Vegetable"
          name="Calabrese Broccoli"
          price="20"
          discount="7"
        />
        <ProductCard
          type="Vegetable"
          name="Calabrese Broccoli"
          price="20"
          discount="7"
        />
        <ProductCard
          type="Vegetable"
          name="Calabrese Broccoli"
          price="20"
          discount="7"
        />
        <ProductCard
          type="Vegetable"
          name="Calabrese Broccoli"
          price="20"
          discount="7"
        />
        <ProductCard
          type="Vegetable"
          name="Calabrese Broccoli"
          price="20"
          discount="7"
        />
      </div>
    </div>
  );
};

export default Products;