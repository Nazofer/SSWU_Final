import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from './icon-link.module.scss';

 const IconLink = ({ children, linkTo, className }) => {
  return (
    <Link to={linkTo || ''} className={`${styles['link-btn']} ${className || ''}`}>
    {children}
    </Link>
  );
 } 

 export default IconLink;