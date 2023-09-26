import styles from './Menu.module.css';
import { ThemeContext } from '../../context/ThemeContext';

// import { Cross as Hamburger } from 'hamburger-react'; 
//https://hamburger-react.netlify.app/

const Menu = ({ showNavbar, setShowNavbar}) => {          

const handleClick = () => {
  setShowNavbar(!showNavbar);
};

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={styles.container} onClick={handleClick}>
          <div className= {styles.line}></div>
          <div className= {styles.line}></div>
          <div className= {styles.line}></div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Menu;

// <div style={{...AppMenuContainer,...MenuContainer}}
// className='menu_container'
//  >
// {displayIcon &&  
// <Hamburger toggle={setShowNavbar} 
// color= { showNavbar? '#fafafa': setColor }
// toggled={showNavbar}
// hideOutline={false}
// distance='sm' duration={0.3} size={16} />}
// </div>