import React from 'react'; 
import ctnStyles from './container.module.scss'

 const WidthContainer = ({children, className}) => {
  return (
    <div className={`${ctnStyles.container} ${className || ''}`}>{children}</div>
  );
 } 

 export default WidthContainer;