import logo from '../../../img/Logo.svg';
import styles from './logo-main.module.scss';
import React from 'react'; 

 const LogoMain = () => {
  return (
    // <div className={styles['nav-menu__logo']}>
    //     <img src={logo} alt='' className='nav-menu__logo-img' />
    //     <p className={styles['nav-menu__logo-paragraph']}>Organick</p>
    //   </div>
    <div className={styles.logo}>
      <img src={logo} alt='Organick logo' className={styles['logo-img']} />
      <p className={styles['logo-paragraph']}>Organick</p>
    </div>
  );
 } 

 export default LogoMain;