import React from 'react';
import styles from './about.module.scss';
import aboutImg from '../../../img/about-img.png';
import AboutCard from './about-card';
import veganFood from '../../../img/about-vegan-food.svg';
import aboutMailbox from '../../../img/about-mailbox-quality.svg';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles['about__image']}>
          <img src={aboutImg} alt='' />
        </div>
        <div className={styles['about__description']}>
          <h3 className={styles['about__description-subheading']}>About Us</h3>
          <h2 className={styles['about__description-heading']}>
            We Believe in Working Accredited Farmers
          </h2>
          <p className={styles['about__description-paragraph']}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className={styles['about__cards']}>
            <AboutCard
              heading='Organic Foods Only'
              paragraph='Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
              img={veganFood}
            />
            <AboutCard
              heading='Quality Standards'
              paragraph='Simply dummy text of the printing and typesetting industry. Lorem Ipsum'
              img={aboutMailbox}
            />
          </div>
          <a href='/' className={styles['about__description-button']}>
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
