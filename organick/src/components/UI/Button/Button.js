import React from 'react';
import btnStyles from './button.module.scss';

const Button = ({children, className}) => {
  return (
    <a href='/' className={`${btnStyles.button} ${className || ''}`}>
      {children}
    </a>
  );
};

export default Button;
