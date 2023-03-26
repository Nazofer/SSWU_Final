import React from 'react';

import styles from './product-backdrop.module.scss';

const ProductBackdrop = props => {
  return <div className={styles.backdrop} onClick={props.onOpenModal}></div>;
};

export default ProductBackdrop;