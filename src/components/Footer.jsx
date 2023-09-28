import React from 'react';
import styles from './styles/Footer.module.css';
import Socials from '../assets/icons/Socials';
import Gmail from '../assets/buttons/Gmail';

const Footer = ({ setShowNavbar, isSmallScreen }) => {
  const date = new Date();
  const currentYear = date.getFullYear(); 

  const openSMSApp = () => {
      const phoneNumber = '09453924586'; // Replace with the desired phone number
      const smsLink = `sms:${phoneNumber}`;
      window.location.href = smsLink;
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h2>Book us today for 10% discount</h2>

        <div className={styles.btnContainer}> 
        <Gmail footerStyle={{textTransform: 'lowercase'}} customText={'roniebenitez01@gmail.com'}/>
        <button className={styles.btn} onClick={openSMSApp}>+639453924586</button>
        </div>
        <div className={styles.socialContainer}>
          <Socials
            displayIcons={ true }
            footerContainer={{ gap: '24px'}}
            footerSocialLink={{
              fill: 'lightgray',
              color: 'lightgray',
              width:  '24px',
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
