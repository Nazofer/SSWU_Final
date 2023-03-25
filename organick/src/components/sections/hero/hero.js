import React from 'react';
import styles from './hero.module.scss';
import Button from '../../UI/Button/Button';

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles['hero__content']}>
        <h3 className={styles['hero__content-subheading']}>
          100% Natural Food
        </h3>
        <h1 className={styles['hero__content-heading']}>
          Choose the best healthier way of life
        </h1>
        <Button href='/' className={styles['hero-btn']}>Explore Now</Button>
      </div>
    </div>
  );
};

export default Hero;
