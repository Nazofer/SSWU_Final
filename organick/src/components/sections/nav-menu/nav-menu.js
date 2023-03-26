import React from 'react';
import { ReactComponent as ArrDown } from '../../../img/nav-menu-arrow-down.svg';
import { ReactComponent as SearchIcon } from '../../../img/nav-menu-search.svg';
import { ReactComponent as Cart } from '../../../img/nav-menu-cart.svg';
import styles from './nav-menu.module.scss';
import LogoMain from '../../UI/LogoMain/logo-main';
import { Heading } from '../../UI/Typography/typography';
import WidthContainer from '../../UI/WidthContainer/container';

const NavMenu = () => {
  return (
    <WidthContainer className={styles['wrapper']}>
      <nav className={styles['nav-menu']}>
        <LogoMain />
        <div className={styles['nav-menu__links']}>
          <a href='/header' className={styles.link}>
            Home
          </a>
          <a href='/about' className={styles.link}>
            About
          </a>
          <a href='/pages' className={`${styles.link} ${styles['pages-btn']}`}>
            Pages
            <ArrDown />
          </a>
          <a href='/shop' className={styles.link}>
            Shop
          </a>
          <a href='/projects' className={styles.link}>
            Projects
          </a>
          <a href='/news' className={styles.link}>
            News
          </a>
        </div>
        <div className={styles['nav-menu__search']}>
          <div className={styles.search}>
            <input
              className={styles['search-input']}
              type='text'
              name=''
              id=''
            />
            <a href='/' className={styles['btn']}>
              <SearchIcon />
            </a>
          </div>
          <div className={styles.cart}>
            <a href='/' className={styles['btn']}>
              <Cart />
            </a>
            <Heading className={styles['cart-text']}>{`Cart (${0})`}</Heading>
          </div>
        </div>
      </nav>
    </WidthContainer>
  );
};

export default NavMenu;
