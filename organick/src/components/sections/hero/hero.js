import React from 'react';
import styles from './hero.module.scss';
import Button from '../../UI/Button/Button';
import { Subheading, HeroHeading } from '../../UI/Typography/typography';
import WidthContainer from '../../UI/WidthContainer/container';

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <WidthContainer className={styles['hero__content']}>
        <Subheading className={styles['hero__content-subheading']}>
          100% Natural Food
        </Subheading>
        <HeroHeading className={styles['hero-heading']}>
          Choose the best healthier way of life
        </HeroHeading>
        <Button showArrow={true} className={styles['hero-btn']}>
          Explore Now
        </Button>
      </WidthContainer>
    </div>
  );
};

export default Hero;
