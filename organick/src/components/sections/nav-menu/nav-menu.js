import React from 'react';
import { ReactComponent as ArrDown } from '../../../img/nav-menu-arrow-down.svg';
import styles from './nav-menu.module.scss';
import LogoMain from '../../UI/LogoMain/logo-main';
import WidthContainer from '../../UI/WidthContainer/container';
import { NavLink } from 'react-router-dom';
import CartLink from './cart-link/cart-link';
import SearchInput from './search-input/search-input';
import { ReactComponent as BurgerMenu } from '../../../img/menu-hamburger.svg';

const NavMenu = () => {
  return (
    <nav className={styles['nav-menu']}>
      <WidthContainer className={styles['wrapper']}>
        <LogoMain />
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
        <div className={styles['nav-menu__search']}>
          <SearchInput />
          <BurgerMenu className={styles['nav-menu__search-burger']} />
          <CartLink className={styles['nav-menu__search-btn']} />
        </div>
      </WidthContainer>
    </nav>
  );
};

export default NavMenu;
