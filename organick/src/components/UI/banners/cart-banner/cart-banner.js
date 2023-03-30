import React from 'react'; 
import Banner from '../page-banner';
import styles from './cart-banner.module.scss';
import banner from '../../../../img/cart-banner.png';

 const CartBanner = () => {
  return (
    <Banner heading='Cart' className={styles['banner']}/>
  );
 } 

 export default CartBanner;