import React from 'react'
import styles from './styles/Contact.module.css'
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
    <div className={styles.title}><h3>Contact</h3></div>
    <div className={styles.contacts}>
    <p>Email: youremail@gmail.com</p>
    <p>Phone: 90394543504</p>
    <p>Social media:</p>
     
     <Socials displayNames={true}/>

    <address>
     <h3 className={styles.title}>Address</h3>
    <p>123 Main Street</p>
        <p>City, State ZIP Code</p>
        <p>Philippines</p>
    </address>
    </div>
       </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact