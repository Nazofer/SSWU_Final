import React from 'react'; 
import styles from './about-card.module.scss'
import { Heading, Paragraph } from '../../../UI/Typography/typography';

 const AboutCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles['card__img']}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles['card__desc']}>
        <Heading className={styles['card__desc-heading']}>{props.heading}</Heading>
        <Paragraph>{props.paragraph}</Paragraph>
      </div>
    </div>
  );
 } 

 export default AboutCard;