import React from 'react';
import { Paragraph } from '../../../../UI/Typography/typography';
import styles from './contact-item.module.scss';

const ContactUs = ({ label, link }) => {
  return (
    <div className={styles['contact']}>
      <Paragraph styles={{ display: label ? 'block' : 'none' }} className={styles['contact-label']}>
        {label || ''}
      </Paragraph>
      <a href='/' className={styles['contact-link']}>{link}</a>
    </div>
  );
};

export default ContactUs;
