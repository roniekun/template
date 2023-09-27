import {useRef, useEffect} from 'react';
import styles from './Menu.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { gsap } from 'gsap';

const Menu = ({ showNavbar, setShowNavbar }) => {
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

  useEffect(() => {
    if (showNavbar){
      gsap.to(oneRef.current, {
        rotate:-45, y: 9});
      gsap.to(twoRef.current, {
        opacity: 0 });
      gsap.to(threeRef.current, {
        rotate:45, y: -9 });
    }
  else{
     gsap.to(oneRef.current, {
        rotate:0, y: '0%'});
      gsap.to(twoRef.current, {
        opacity: 1 });
      gsap.to(threeRef.current, {
        rotate:0, y: '0%' });
    
  }

  }, [showNavbar])
  

  const handleClick = () => {
    setShowNavbar(!showNavbar);
    console.log(showNavbar);
  };

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={styles.container} onClick={handleClick}>
          <div ref={oneRef} className={styles.line}></div>
          <div ref={twoRef} className={styles.line}></div>
          <div ref={threeRef} className={styles.line}></div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Menu;
