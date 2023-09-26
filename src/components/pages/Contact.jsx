import React from 'react'
import styles from './styles/Contact.module.css'
import Header from '../Header'
import Footer from '../Footer'

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
      <h1>this is contact</h1>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact