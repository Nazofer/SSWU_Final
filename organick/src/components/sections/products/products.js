import React, { useState, useEffect } from 'react';
import ProductCard from './product-card';
import { Subheading, Heading } from '../../UI/Typography/typography';
import Button from '../../UI/Button/Button';
import styles from './products.module.scss';
import WidthContainer from '../../UI/WidthContainer/container';
import ProductForm from './products-modal/products-modal';
import ProductBackdrop from './products-modal/product-backdrop';
import { db_products } from '../../../db/db';
import { storage } from '../../../db/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const Products = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, 'images/');

  const openModalHandler = (e) => {
    e?.preventDefault();
    console.log('modal clicked');
    setIsModalOpened((prev) => !prev);
  };

  const selectProductHandler = (product_id) => {
    const selectedItem = db_products.find(
      (element) => element.id === product_id
    );
    //console.log('product selected', selectedItem);
    setSelectedProduct(selectedItem);
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      console.log(response);
      response.items.forEach((element) => {
        getDownloadURL(element).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      })
    });
  }, []);

  const ImagesList = imageList.map((url) => {
    return <img src={url} alt="" />
  })

  console.log(imageList.length);

  const ProductsList = db_products.map((product) => (
    <ProductCard
      type={product.type}
      name={product.name}
      price={product.price}
      discount={product.discount}
      onOpenModal={openModalHandler}
      onSelectItem={selectProductHandler}
      key={product.id}
      id={product.id}
    />
  ));

  return (
    <div className={styles.categories}>
      {ImagesList}
      <Subheading className={styles['categories-subheading']}>
        Categories
      </Subheading>
      <Heading className={styles['categories-heading']}>Our Products</Heading>
      <WidthContainer className={styles['categories__container']}>
        {ProductsList}
      </WidthContainer>
      <Button showArrow={true}>Load More</Button>
      {isModalOpened && (
        <>
          <ProductBackdrop onOpenModal={openModalHandler} />
          <ProductForm onOpenModal={openModalHandler} selectedProduct={selectedProduct}/>
        </>
      )}
    </div>
  );
};

export default Products;
