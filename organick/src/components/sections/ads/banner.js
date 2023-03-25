import React from 'react';
import { Subheading, Heading } from '../../UI/Typography/typography';
import styles from './banner.module.scss';

const Banner = (props) => {
  return (
    <div className={`${styles.banner} ${styles[`${props.className}`]}`}>
      <div className={styles['banner__text']}>
        <Subheading textColor={props.textColor}>{props.subheading}</Subheading>
        <Heading
          textColor={props.textColor}
          className={`${styles['banner__text-heading']}`}
        >
          {props.heading}
        </Heading>
      </div>
    </div>
  );
};

export default Banner;
