import React from 'react';
import { Input, Textarea } from './form-input/form-input';
import WidthContainer from '../../../UI/WidthContainer/container';
import styles from './order-form.module.scss';
import Button from '../../../UI/Button/Button';

const Form = () => {
  return (
    <WidthContainer className={styles['form__container']}>
      <form action=''>
        <div className={styles.main}>
          <Input
            label={'Full Name*'}
            inptType={'text'}
            inptPlaceholder={'Your name:'}
          />
          <Input
            label={'Your Email*'}
            inptType={'email'}
            inptPlaceholder={'example@yourmail.com:'}
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
      {/* <Button>Confirm</Button> */}
    </WidthContainer>
  );
};

export default Form;
