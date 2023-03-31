import React from 'react';
import styles from './about-card.module.scss';
import { Heading, Paragraph } from '../../../UI/Typography/typography';

const AboutCard = ({ img, heading, paragraph, disableImg }) => {
  return (
    <div className={styles.card}>
      <div
        className={`${styles['card__img']} ${
          disableImg ? styles['card__img--disabled'] : ''
        }`}
      >
        <img src={img} alt='' />
      </div>
      <div className={styles['card__desc']}>
        <Heading className={styles['card__desc-heading']}>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
      </div>
    </div>
  );
};

export default AboutCard;
