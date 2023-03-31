import React from 'react';
import { Paragraph } from '../../../../UI/Typography/typography';
import styles from './contact-item.module.scss';
import { Link } from 'react-router-dom';

const ContactUs = ({ label, link }) => {
  return (
    <div className={styles['contact']}>
      <Paragraph styles={{ display: label ? 'block' : 'none' }} className={styles['contact-label']}>
        {label || ''}
      </Paragraph>
      <Link to='' className={styles['contact-link']}>{link}</Link>
    </div>
  );
};

export default ContactUs;
