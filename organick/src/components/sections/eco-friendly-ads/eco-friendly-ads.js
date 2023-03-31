import React from 'react';
import Banner from './eco-friendly-banner/eco-friendly-banner';
import styles from './eco-friendly-ads.module.scss';
const EcoFriendlyAds = () => {
  return (
    <div className={styles.banners}>
      <Banner
        className={styles['banners--1']}
        button='Organic Juice'
      />
      <Banner
        className={styles['banners--2']}
        button='Organic Food'
      />
      <Banner
        className={styles['banners--3']}
        button='Nuts&Cookies'
      />
    </div>
  );
};

export default EcoFriendlyAds;
