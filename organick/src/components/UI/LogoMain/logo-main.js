import logo from '../../../img/Logo.svg';
import styles from './logo-main.module.scss';
import React from 'react'; 
import { Heading } from '../Typography/typography';

 const LogoMain = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt='Organick logo' className={styles['logo-img']} />
      <Heading className={styles['logo-heading']}>Organick</Heading>
    </div>
  );
 } 

 export default LogoMain;