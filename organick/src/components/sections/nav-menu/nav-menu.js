import React from 'react';
import logo from '../../../img/Logo.svg';
import arrDown from '../../../img/nav-menu-arrow-down.svg';
import searchIcon from '../../../img/nav-menu-search.svg';
import cart from '../../../img/nav-menu-cart.svg';
import styles from './nav-menu.module.scss';

const NavMenu = () => {
  return (
    <nav className={styles['nav-menu']}>
      <div className={styles['nav-menu__logo']}>
        <img src={logo} alt='' className='nav-menu__logo-img' />
        <p className={styles['nav-menu__logo-paragraph']}>Organick</p>
      </div>
      <div className={styles['nav-menu__links']}>
        <a href='/header' className={styles.link}>
          Home
        </a>
        <a href='/about' className={styles.link}>
          About
        </a>
        <a href='/pages' className={`${styles.link} ${styles['pages-btn']}`}>
          Pages
          <img src={arrDown} alt=''/>
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
          <input className={styles['search-input']} type='text' name='' id='' />
          <a href='/' className={styles['btn']}>
            <img src={searchIcon} alt='' />
          </a>
        </div>
        <div className={styles.cart}>
          <a href='/' className={styles['btn']}>
            <img src={cart} alt='' />
          </a>
          <p className={styles['cart-text']}>{`Cart (${0})`}</p>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
