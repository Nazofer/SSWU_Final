import React from 'react';
import btnStyles from './button.module.scss';
import { ReactComponent as BtnArrow } from '../../../img/button-arrow.svg';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';

const Button = ({ children, className, showArrow, onClick, type }) => {
  const navigate = useNavigate();
  const clickHandler = onClick || (() => navigate('randomtext=>not-found'));

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
