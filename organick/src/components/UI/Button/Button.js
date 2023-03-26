import React from 'react';
import btnStyles from './button.module.scss';
import { ReactComponent as BtnArrow } from '../../../img/button-arrow.svg';

const Button = ({children, className, showArrow, onClick}) => {
  const clickHandler = onClick || ((e) => e.preventDefault());

  return (
    <a onClick={clickHandler} href='/' className={`${btnStyles.button} ${className || ''}`}>
      {children}
      <BtnArrow style={{display: showArrow ? 'block' : 'none'}}/>
    </a>
  );
};

export default Button;
