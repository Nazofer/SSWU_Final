import React from 'react';
import { Input, Textarea } from './form-input/form-input';
import WidthContainer from '../../../UI/WidthContainer/container';
import styles from './order-form.module.scss';
import Button from '../../../UI/Button/Button';
import useInputValidation from '../../../form-validation/form-validation';
import { useNavigate } from "react-router-dom";

const nameValidator = (value) => /^[A-Z][a-z]*$/.test(value);
const emailValidator = (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(value);
const phoneValidator = (value) => /^\d{10}$/.test(value);
const addressValidator = (value) => value.trim().length > 10;

const Form = () => {
  const navigate = useNavigate();

  const {
    value: nameValue,
    isValid: isNameValid,
    isTouched: isNameTouched,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInputValidation(nameValidator);

  const {
    value: emailValue,
    isValid: isEmailValid,
    isTouched: isEmailTouched,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInputValidation(emailValidator);

  const {
    value: phoneValue,
    isValid: isPhoneValid,
    isTouched: isPhoneTouched,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInputValidation(phoneValidator);

  const {
    value: addressValue,
    isValid: isAddressValid,
    isTouched: isAddressTouched,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInputValidation(addressValidator);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isNameValid || !isEmailValid || !isPhoneValid || !isAddressValid) {
      return;
    }
    resetName();
    resetEmail();
    resetAddress()
    resetPhone();
    navigate("/success");
  };

  return (
    <WidthContainer>
      <form className={styles.form}>
        <div className={styles.form__main}>
          <Input
            invalid={!isNameValid && isNameTouched}
            value={nameValue}
            label={'Full Name*'}
            inptType={'text'}
            inptPlaceholder={'Your name:'}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          <Input
            invalid={!isEmailValid && isEmailTouched}
            value={emailValue}
            label={'Your Email*'}
            inptType={'email'}
            inptPlaceholder={'example@yourmail.com:'}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          <Input
            invalid={!isAddressValid && isAddressTouched}
            value={addressValue}
            label={'Address*'}
            inptType={'text'}
            inptPlaceholder={'Your company  address:'}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
          />
          <Input
            invalid={!isPhoneValid && isPhoneTouched}
            value={phoneValue}
            label={'Phone number*'}
            inptType={'tel'}
            inptPlaceholder={'Enter your phone:'}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
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
          onClick={submitHandler}
        >
          Confirm
        </Button>
      </form>
    </WidthContainer>
  );
};

export default Form;
