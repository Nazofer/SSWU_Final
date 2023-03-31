import React from 'react'; 
import styles from './container.module.scss'

 const WidthContainer = ({children, className}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>{children}</div>
  );
 } 

 export default WidthContainer;