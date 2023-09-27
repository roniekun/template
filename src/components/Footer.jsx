import React from 'react';
import styles from './styles/Footer.module.css';
import Socials from '../assets/icons/Socials';

const Footer = ({ setShowNavbar, isSmallScreen }) => {
  const date = new Date();
  const currentYear = date.getFullYear(); 

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2>Connect to my social media</h2>
        <div className={styles.socialContainer}>
          <Socials
            displayIcons={true}
            footerContainer={{ gap: '10px' }}
            footerSocialLink={{
              fill: 'black',
              color: 'black',
              width: '20px',
              aspectRatio: '1/1',
            }}
          />
        </div>
        <h3>all right reserved</h3>
        <h3> &copy; {currentYear}</h3>
      </div>
    </div>
  );
};

export default Footer;
