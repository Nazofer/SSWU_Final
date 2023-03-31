import React from 'react';
import { Heading, Subheading } from '../../UI/Typography/typography';
import WidthContainer from '../../UI/WidthContainer/container';
import AboutCard from '../about/about-card/about-card';
import styles from './eco-friendly.module.scss';

const EcoFriendly = () => {
  return (
    <div className={styles['eco-friendly']}>
      <WidthContainer className={styles['wrapper']}>
        <div className={styles['eco-friendly__content']}>
          <Subheading className={styles['eco-friendly__content-subheading']}>
            Eco Friendly
          </Subheading>
          <Heading className={styles['eco-friendly__content-heading']}>
            Econis is a Friendly Organic Store
          </Heading>
          <div className={styles['eco-friendly__content__points']}>
            <AboutCard
            disableImg={true}
              heading='Start with Our Company First'
              paragraph='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis'
            ></AboutCard>
            <AboutCard
            disableImg={true}
              heading='Learn How to Grow Yourself'
              paragraph='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis'
            ></AboutCard>
            <AboutCard
            disableImg={true}
              heading='Farming Strategies of Today'
              paragraph='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis'
            ></AboutCard>
          </div>
        </div>
      </WidthContainer>
    </div>
  );
};

export default EcoFriendly;
