import React from 'react';
import btnStyles from './button.module.scss';
import { ReactComponent as BtnArrow } from '../../../img/button-arrow.svg';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const Button = ({ children, className, showArrow, onClick, type }) => {
  const navigate = useNavigate();
  const clickHandler = onClick || (() => navigate('notfound')); //navigate with any text leads to not-found page

  return (
    <button
      onClick={clickHandler}
      type={type || 'button'}
      className={classNames(btnStyles.button, className)}
    >
      {children}
      <BtnArrow
        className={classNames({
          [btnStyles['button-arrow']]: showArrow,
          [btnStyles['button-arrow--hidden']]: !showArrow,
        })}
      />
    </button>
  );
};

export default Button;
