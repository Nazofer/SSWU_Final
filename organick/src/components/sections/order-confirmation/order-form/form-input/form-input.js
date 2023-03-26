import React from 'react';
import inptStyles from './form-input.module.scss';

export const Input = ({label, inptType, inptPlaceholder}) => {
  return (
    <label className={inptStyles.label}>
      {label}
      <input type={inptType} placeholder={inptPlaceholder} className={inptStyles.input}/>
    </label>
  );
};

export const Textarea = ({label, inptType, inptPlaceholder}) => {
  return (
    <label className={inptStyles.label}>
      {label}
      <textarea type={inptType} placeholder={inptPlaceholder} className={`${inptStyles.input} ${inptStyles.textarea}`}/>
    </label>
  );
};

