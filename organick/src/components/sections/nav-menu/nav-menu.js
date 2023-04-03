import React, { useState } from 'react';
import { ReactComponent as ArrDown } from '../../../img/nav-menu-arrow-down.svg';
import styles from './nav-menu.module.scss';
import LogoMain from '../../UI/LogoMain/logo-main';
import WidthContainer from '../../UI/WidthContainer/container';
import { NavLink } from 'react-router-dom';
import CartLink from './cart-link/cart-link';
import SearchInput from './search-input/search-input';
import classNames from 'classnames';

const NavMenu = () => {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  const isActiveBurgerHandler = () => {
    setIsActiveBurger(!isActiveBurger);
  };

  isActiveBurger
    ? document.body.classList.add('no-scroll')
    : document.body.classList.remove('no-scroll');

  return (
    <nav className={styles['nav-menu']}>
      <WidthContainer className={styles['wrapper']}>
        <LogoMain />
        <div
          className={
            isActiveBurger
              ? styles['nav-menu__burger--active']
              : styles['nav-menu__burger']
          }
        >
          <div className={styles['nav-menu__links']}>
            <NavLink to='/'>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>
              Pages <ArrDown />
            </NavLink>
            <NavLink>Shop</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>News</NavLink>
          </div>
        </div>
        <div className={styles['nav-menu__controls']}>
          <SearchInput />
          <button
            className={classNames(styles['nav-menu__controls-burger'], {
              [styles['nav-menu__controls-burger--active']]: isActiveBurger,
            })}
            onClick={isActiveBurgerHandler}
          >
            <span></span>
          </button>
          <CartLink className={styles['nav-menu__controls-btn']} />
        </div>
      </WidthContainer>
    </nav>
  );
};

export default NavMenu;
