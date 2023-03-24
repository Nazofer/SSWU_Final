import React from 'react';
import styles from './benefit-card.module.scss';

const BenefitCard = ({heading, paragraph}) => {
  return (
    <div className={styles['benefits__card']}>
      <h2 className={styles['benefits__card-value']}>{heading}</h2>
      <p className={styles['benefits__card-paragraph']}>{paragraph}</p>
    </div>
  );
};

export default BenefitCard;
