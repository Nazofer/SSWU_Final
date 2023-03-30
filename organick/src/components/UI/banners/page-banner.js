import React from 'react'; 
import { Heading } from '../Typography/typography';
import styles from './page-banner.module.scss';


 const Banner = (props) => {
  return (
    <div className={`${styles.banner} ${props.className || ''}`}>
      <Heading className={`${styles['banner-heading']} ${props.headingClassName}`}>{props.heading}</Heading>
    </div>
  );
 } 

 export default Banner;