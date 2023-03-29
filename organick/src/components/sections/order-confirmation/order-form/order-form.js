import React, { useState, useReducer } from 'react';
import { Input, Textarea } from './form-input/form-input';
import WidthContainer from '../../../UI/WidthContainer/container';
import styles from './order-form.module.scss';
import Button from '../../../UI/Button/Button';

const nameRegex = /^[A-Z][a-z]*$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: emailRegex.test(action.val) };
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: emailRegex.test(state.value), isTouched: true };
  }
  return { value: '', isValid: false };
};

const nameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: nameRegex.test(action.val) };
  } else if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: nameRegex.test(state.value), isTouched: true };
  }
  return { value: '', isValid: false };
};

const Form = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: undefined,
    isTouched: undefined,
  });

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: '',
    isValid: undefined,
    isTouched: undefined,
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    setFormIsValid(emailRegex.test(event.target.value) && nameState.isValid);
  };

  const nameChangeHandler = (event) => {
    dispatchName({ type: 'USER_INPUT', val: event.target.value });
    setFormIsValid(emailState.isValid && nameRegex.test(event.target.value));
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validateNameHandler = () => {
    dispatchName({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <WidthContainer className={styles['form__container']}>
      <form action=''>
        <div className={styles.main}>
          <Input
            invalid={nameState.isValid === false && nameState.isTouched}
            label={'Full Name*'}
            inptType={'text'}
            inptPlaceholder={'Your name:'}
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
          />
          <Input
            invalid={emailState.isValid === false  && emailState.isTouched}
            label={'Your Email*'}
            inptType={'email'}
            inptPlaceholder={'example@yourmail.com:'}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          <Input
            label={'Address*'}
            inptType={'text'}
            inptPlaceholder={'Your company  address:'}
          />
          <Input
            label={'Phone number*'}
            inptType={'tel'}
            inptPlaceholder={'Enter your phone:'}
          />
        </div>
        <Textarea
          label={'Message*'}
          inptType={'text'}
          inptPlaceholder={'Enter your phone:'}
        />
      </form>
      <Button showArrow={true}>Confirm</Button>
    </WidthContainer>
  );
};

export default Form;
