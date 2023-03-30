import React from 'react';
import Banner from '../page-banner';
import styles from './success-banner.module.scss';

const SuccessBanner = () => {
  return (
    <Banner
      heading='Thank you for your order'
      className={styles.banner}
      headingClassName={styles.heading}
    ></Banner>
  );
};

export default SuccessBanner;
