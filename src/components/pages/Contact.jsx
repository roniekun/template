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
     <h2 className={styles.heading}>Let me know about the project <br /> you are working with.</h2>

    <div className={styles.sectionOne}>
    <div className={styles.formContainer}>
     <ContactForm/>
    </div>

    <div className={styles.contactLists}>
    <div className={styles.contactContainer}> 
    <h5 className={styles.title}>Contact Details</h5>
    <p>youremail@gmail.com</p>
    <p> 90394543504</p>
    </div>

    <div className={styles.socialContainer}>
       <h5 className={styles.title}>Digital Spaces</h5>
     <Socials 
     contactContainer={{flexDirection:'column', alignItems: 'flex-start'}}
     contactSocialLink={{fontSize: '16px', color: 'black', lineHeight: '1.5em'}}
     displayNames={true}/>
     </div>

    <div className={styles.addressContainer}>
    <h5 className={styles.title}>Location</h5>
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