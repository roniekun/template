import React from 'react';
import styles from './Menu.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const Menu = ({ showNavbar, setShowNavbar }) => {
  const handleClick = () => {
    setShowNavbar(!showNavbar);
    console.log(showNavbar);
  };

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={styles.container} onClick={handleClick}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Menu;
