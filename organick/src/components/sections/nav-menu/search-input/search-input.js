import React from 'react';
import IconLink from '../icon-link/icon-link';
import styles from './search-input.module.scss';
import { ReactComponent as SearchIcon } from '../../../../img/nav-menu-search.svg';

const SearchInput = () => {
  return (
    <div className={styles.search}>
      <input className={styles['search-input']} type='text'/>
      <IconLink className={styles['btn']}>
        <SearchIcon />
      </IconLink>
    </div>
  );
};

export default SearchInput;
