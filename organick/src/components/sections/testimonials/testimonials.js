import React from 'react';
import styles from './testimonials.module.scss';
import avatar1 from '../../../img/testimonials-avatar1.jpg';
import stars from '../../../img/5-stars.svg';
import bgLeft from '../../../img/testimonials-left.png';
import bgRight from '../../../img/testimonials-left.png';
import BenefitCard from './benefit-card';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <img src={bgLeft} className={styles['testimonials-bg--left']} alt="" />
      <img src={bgRight} className={styles['testimonials-bg--right']} alt="" />
      <h3 className={styles['testimonials-subheading']}>Testimonial</h3>
      <h2 className={styles['testimonials-heading']}>
        What Our Customer Saying?
      </h2>
      <div className={styles['feedback']}>
        <div className={styles['feedback__person']}>
          <img src={avatar1} alt='' className={styles['feedback__person-avatar']}/>
          <img src={stars} alt='' className={styles['feedback__person-rate']}/>
        </div>
        <p className={styles['feedback-paragraph']}>
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </p>
        <h3 className={styles['person-name']}>Sara Taylor</h3>
        <p className={styles['person-role']}>Consumer</p>
      </div>
      <div className={styles.pagination}></div>
      <hr className={styles['testimonials-separate']} />
      <div class={styles.benefits}>
        <BenefitCard heading={'100%'} paragraph={'Organic'}/>
        <BenefitCard heading={'285'} paragraph={'Active Product'}/>
        <BenefitCard heading={'350+'} paragraph={'Organic Orchads'}/>
        <BenefitCard heading={'25+'} paragraph={'Years of Farming'}/>
        
      </div>
    </div>
  );
};

export default Testimonials;
