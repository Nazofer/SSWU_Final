import React from 'react';
import Banner from './banner/banner';
import WidthContainer from '../../UI/WidthContainer/container';
import styles from './ads.module.scss';

const Ads = () => {
  return (
    <WidthContainer className={styles.banners}>
      <Banner
        className="banner--1"
        heading="Get Garden Fresh Fruits"
        subheading="Natural!!"
        textColor="white"
      />
      <Banner
        className="banner--2"
        heading="Get 10% off on Vegetables"
        subheading="Offer!!"
      />
    </WidthContainer>
  );
};

export default Ads;