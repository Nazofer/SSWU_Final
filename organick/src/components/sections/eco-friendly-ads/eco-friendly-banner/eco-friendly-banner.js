import React from 'react'; 
import Button from '../../../UI/Button/Button';
import styles from './eco-friendly-banner.module.scss';

 const EcoFriendlyBanner = ({ button, className }) => {
  return (
    <div className={`${styles['ads__card']} ${className || ''}`}>
      <Button className={styles['ads__card-button']}>{button}</Button>
    </div>
  );
 } 

 export default EcoFriendlyBanner;