import React from 'react';
import styles from './hero.module.scss';
import Button from '../../UI/Button/Button';
import { Subheading, HeroHeading } from '../../UI/Typography/typography';

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles['hero__content']}>
        <Subheading className={styles['hero__content-subheading']}>
          100% Natural Food
        </Subheading>
        <HeroHeading className={styles['hero-heading']}>
          Choose the best healthier way of life
        </HeroHeading>
        <Button href='/' className={styles['hero-btn']}>Explore Now</Button>
      </div>
    </div>
  );
};

export default Hero;
