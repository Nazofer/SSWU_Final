import React, { useState, useReducer } from 'react';
import { Input, Textarea } from './form-input/form-input';
import WidthContainer from '../../../UI/WidthContainer/container';
import styles from './order-form.module.scss';
import Button from '../../../UI/Button/Button';

const nameRegex = /^[A-Z][a-z]*$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
const phoneRegex = /^\d{10}$/;

const inputReducer = (regex) => (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: regex.test(action.val) };
  } else if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: regex.test(state.value),
      isTouched: true,
    };
  }
  return { value: '', isValid: false };
};

const Form = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const emailReducer = inputReducer(emailRegex);
  const nameReducer = inputReducer(nameRegex);
  const phoneReducer = inputReducer(phoneRegex);

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

  const [phoneState, dispatchPhone] = useReducer(phoneReducer, {
    value: '',
    isValid: undefined,
    isTouched: undefined,
  });

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    //setFormIsValid(emailRegex.test(event.target.value) && nameState.isValid);
  };

  const nameChangeHandler = (event) => {
    dispatchName({ type: 'USER_INPUT', val: event.target.value });
    //setFormIsValid(emailState.isValid && nameRegex.test(event.target.value));
  };

  const phoneChangeHandler = (event) => {
    //console.log(event.target.value);
    dispatchPhone({ type: 'USER_INPUT', val: event.target.value });
    //setFormIsValid(State.isValid && nameRegex.test(event.target.value));
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validateNameHandler = () => {
    dispatchName({ type: 'INPUT_BLUR' });
  };

  const validatePhoneHandler = () => {
    dispatchPhone({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <WidthContainer>
      <form className={styles.form}>
        <div className={styles.form__main}>
          <Input
            invalid={!nameState.isValid && nameState.isTouched}
            label={'Full Name*'}
            inptType={'text'}
            inptPlaceholder={'Your name:'}
            onChange={nameChangeHandler}
            onBlur={validateNameHandler}
          />
          <Input
            invalid={!emailState.isValid && emailState.isTouched}
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
            invalid={!phoneState.isValid && phoneState.isTouched}
            label={'Phone number*'}
            inptType={'number'}
            inptPlaceholder={'Enter your phone:'}
            onChange={phoneChangeHandler}
            onBlur={validatePhoneHandler}
          />
        </div>
        <Textarea
          label={'Message*'}
          inptType={'text'}
          inptPlaceholder={'Enter your phone:'}
        />
        <Button
          showArrow={true}
          type='submit'
          className={styles['form-button']}
        >
          Confirm
        </Button>
      </form>
    </WidthContainer>
  );
};

export default Form;
