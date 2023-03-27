import React from 'react';
import { ReactComponent as ArrDown } from '../../../img/nav-menu-arrow-down.svg';
import { ReactComponent as SearchIcon } from '../../../img/nav-menu-search.svg';
import { ReactComponent as Cart } from '../../../img/nav-menu-cart.svg';
import styles from './nav-menu.module.scss';
import LogoMain from '../../UI/LogoMain/logo-main';
import { Heading } from '../../UI/Typography/typography';
import WidthContainer from '../../UI/WidthContainer/container';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const NavMenu = () => {
  const cartCounter = useSelector(state => state.cartCounter);

  return (
    <WidthContainer className={styles['wrapper']}>
      <nav className={styles['nav-menu']}>
        <LogoMain />
        <div className={styles['nav-menu__links']}>
        <NavLink to='/'>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>
          Pages <ArrDown/>
        </NavLink>
        <NavLink>Shop</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>News</NavLink>
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
            <Link to='cart' className={styles['btn']}>
              <Cart />
            </Link>
            <Heading className={styles['cart-text']}>{`Cart (${cartCounter.value})`}</Heading>
          </div>
        </div>
      </nav>
    </WidthContainer>
  );
};

export default NavMenu;
