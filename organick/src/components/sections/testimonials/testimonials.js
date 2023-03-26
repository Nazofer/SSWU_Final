import React from 'react';
import styles from './testimonials.module.scss';
import avatar1 from '../../../img/testimonials-avatar1.jpg';
import stars from '../../../img/5-stars.svg';
import bgLeft from '../../../img/testimonials-left.png';
import bgRight from '../../../img/testimonials-left.png';
import BenefitCard from './benefit-card';
import { Heading, Subheading, Paragraph } from '../../UI/Typography/typography';
import WidthContainer from '../../UI/WidthContainer/container';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <img src={bgLeft} className={styles['testimonials-bg--left']} alt="" />
      <img src={bgRight} className={styles['testimonials-bg--right']} alt="" />
      <Subheading className={styles['testimonials-subheading']}>Testimonial</Subheading>
      <Heading className={styles['testimonials-heading']}>
        What Our Customer Saying?
      </Heading>
      <WidthContainer className={styles['feedback']}>
        <div className={styles['feedback__person']}>
          <img src={avatar1} alt='' className={styles['feedback__person-avatar']}/>
          <img src={stars} alt='' className={styles['feedback__person-rate']}/>
        </div>
        <Paragraph className={styles['feedback-paragraph']}>
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </Paragraph>
        <Heading className={styles['person-name']}>Sara Taylor</Heading>
        <Paragraph className={styles['person-role']}>Consumer</Paragraph>
      </WidthContainer>
      <hr className={styles['testimonials-separate']} />
      <WidthContainer className={styles.benefits}>
        <BenefitCard heading={'100%'} paragraph={'Organic'}/>
        <BenefitCard heading={'285'} paragraph={'Active Product'}/>
        <BenefitCard heading={'350+'} paragraph={'Organic Orchads'}/>
        <BenefitCard heading={'25+'} paragraph={'Years of Farming'}/>
        
      </WidthContainer>
    </div>
  );
};

export default Testimonials;
