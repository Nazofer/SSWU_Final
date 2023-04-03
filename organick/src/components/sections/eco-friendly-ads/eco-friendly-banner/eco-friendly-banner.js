import React from 'react'; 
import Button from '../../../UI/Button/Button';
import styles from './eco-friendly-banner.module.scss';
import classNames from 'classnames';

 const EcoFriendlyBanner = ({ button, className }) => {
  return (
    <div className={classNames(styles['ads__card'], className)}>
      <Button white className={styles['ads__card-button']}>{button}</Button>
    </div>
  );
 } 

 export default EcoFriendlyBanner;