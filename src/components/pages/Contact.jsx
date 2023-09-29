import React from 'react'
import styles from './Contact.module.css'
import ContactForm from '../../assets/contact-form/Contactform'
import Header from '../Header'
import Footer from '../Footer'
import Socials from '../../assets/icons/Socials'

const Contact = ({isDesktop, setShowNavbar, isMediumScreen, isSmallScreen,showNavbar}) => {
  return (
    <div className={styles.container}>
         <Header isDesktop={isDesktop}
              isMediumScreen={isMediumScreen}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
              setColor={'black'}
              showNavbar={showNavbar}/>
    <div className={styles.body}>

    <div className={styles.contactForm}>
     <ContactForm/>
    </div>

    <div className={styles.sectionOne}>

    <div className={styles.title}> <h5>Contact Details</h5></div>
    
    <div className={styles.contacts}>
    <p> <span>Email:</span> youremail@gmail.com</p>
    <p><span>Phone Number:</span> 90394543504</p>
    <p><span>Digital Spaces:</span></p>
     
     <Socials 
     contactContainer={{flexDirection:'column', alignItems: 'flex-start'}}
     contactSocialLink={{fontSize: '14px', color: 'black',lineHeight: '1.5em'}}
     displayNames={true}/>

    <div className={styles.addressContainer}>
     <p><span>Address</span></p>
        <p>123 Main Street</p>
        <p>City, State ZIP Code</p>
        <p>Philippines</p>
    </div>
 
    </div>
       </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact