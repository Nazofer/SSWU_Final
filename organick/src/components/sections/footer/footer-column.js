import React from 'react'; 
import styles from './footer-column.module.scss';

 const FooterColumn = ({children, className}) => {
  return (
    <div className={`${styles['column']} ${className || ''}`}>
      {children}
    </div>
  );
 } 

 export default FooterColumn;