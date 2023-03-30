import React from 'react';
import btnStyles from './button.module.scss';
import { ReactComponent as BtnArrow } from '../../../img/button-arrow.svg';

const Button = ({ children, className, showArrow, onClick, type }) => {
  const clickHandler = onClick || ((e) => e.preventDefault());

  return (
    <button
      onClick={clickHandler}
      type={type || 'button'}
      className={`${btnStyles.button} ${className || ''}`}
    >
      {children}
      <BtnArrow style={{ display: showArrow ? 'block' : 'none' }} />
    </button>
  );
};

export default Button;
