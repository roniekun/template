import { ThemeContext } from '../context/ThemeContext';
import styles from './styles/Header.module.css';
import SiteLogo from './SiteLogo';
import Menu from '../assets/buttons/Menu';
import NavbarLinks from './pages/Navlinks';

function Header({showNavbar, setShowNavbar, isSmallScreen, isMediumScreen, isDesktop, setColor}) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
          <div id={`component-${theme}`} className={styles.container}>
            <div className={styles.logoWrapper}>
              <SiteLogo setShowNavbar={setShowNavbar}
              showNavbar={showNavbar}
              text={'yourName Photography'}
              headerLogo={{fontSize: '24px',
                            fontWeight: 'bold',
                            color: setColor}} />
            </div> 
            { isSmallScreen &&
              <div className={styles.menuWrapper}>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              displayIcon={true}
              setColor={setColor}
              MenuContainer={{}}/>
              </div>}
              { isMediumScreen &&
              <div className={styles.menuWrapper}>
              <Menu showNavbar={showNavbar} 
              setShowNavbar={setShowNavbar}
              displayIcon={true}
              setColor={setColor}
              MenuContainer={{}}/>
              </div>}

              {isDesktop &&
               <div className={styles.navLinksWrapper}>
               <NavbarLinks 
               setShowNavbar={setShowNavbar}
               headerNavbarWrapper={{ padding: '.3em', 
                                      borderRadius: '30px'}}
               headerNavbarLink= {{textTransform: 'capitalize',
               fontSize: '16px', fontWeight: '400', color: setColor}}/>
             </div>}
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export default Header;


    {/* {!isSmallScreen &&
             <div className='socials_wrapper'>
               <Socials displayIcons={true}
                headerIconContainer={{margin: '5px'}}
                headerSocialLink={{fill: 'lightgray'}}/>
             </div>
             } */}