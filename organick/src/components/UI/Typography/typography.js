import React from 'react';
import typography from './typography.module.scss';

export const Heading = ({ children, className, textColor }) => {
  return (
    <h2
      style={{ color: textColor || '' }}
      className={`${typography.heading} ${className || ''}`}
    >
      {children}
    </h2>
  );
};

export const Subheading = ({ children, className, textColor }) => {
  console.log(textColor);
  return (
    <h3
      style={{ color: textColor || '' }}
      className={`${typography.subheading} ${className || ''}`}
    >
      {children}
    </h3>
  );
};

export const Paragraph = ({ children, className, textColor }) => {
  return (
    <p
      style={{ color: textColor || '' }}
      className={`${typography.heading} ${className || ''}`}
    >
      {children}
    </p>
  );
};

export const HeroHeading = ({ children, className, textColor }) => {
  return (
    <h1
      style={{ color: textColor || '' }}
      className={`${typography.heading} ${className || ''}`}
    >
      {children}
    </h1>
  );
};
