import React, { useState } from 'react';
import ProductCard from './product-card';
import { Subheading, Heading } from '../../UI/Typography/typography';
import Button from '../../UI/Button/Button';
import styles from './products.module.scss';
import WidthContainer from '../../UI/WidthContainer/container';
import ProductForm from './products-modal/products-modal';
import ProductBackdrop from './products-modal/product-backdrop';

const Products = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModalHandler = (e) => {
    e.preventDefault();
    console.log('clicked');
    setIsModalOpened((prev) => !prev);
  };

  return (
    <div className={styles.categories}>
      <Subheading className={styles['categories-subheading']}>
        Categories
      </Subheading>
      <Heading className={styles['categories-heading']}>Our Products</Heading>
      <WidthContainer className={styles['categories__container']}>
        <ProductCard
          type='Vegetable'
          name='Calabrese Broccoli'
          price='20'
          discount='7'
          onClick={openModalHandler}
        />
        <ProductCard
          type='Vegetable'
          name='Calabrese Broccoli'
          price='20'
          discount='7'
        />
        <ProductCard
          type='Vegetable'
          name='Calabrese Broccoli'
          price='20'
          discount='7'
        />
        <ProductCard
          type='Vegetable'
          name='Calabrese Broccoli'
          price='20'
          discount='7'
        />
        <ProductCard
          type='Vegetable'
          name='Calabrese Broccoli'
          price='20'
          discount='7'
        />
      </WidthContainer>
      <Button showArrow={true}>Load More</Button>
      {isModalOpened && (
        <>
          <ProductBackdrop onOpenModal={openModalHandler} />
          <ProductForm onOpenModal={openModalHandler} />
        </>
      )}
    </div>
  );
};

export default Products;
