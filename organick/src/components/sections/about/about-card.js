import React from 'react'; 
import styles from './about-card.module.scss'

 const AboutCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles['card__img']}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles['card__desc']}>
        <h3 className={styles['card__desc-heading']}>{props.heading}</h3>
        <p className={styles['card__desc-paragraph']}>{props.paragraph}</p>
      </div>
    </div>
  );
 } 

 export default AboutCard;