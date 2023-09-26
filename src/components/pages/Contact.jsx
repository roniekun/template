import React from 'react'
import styles from './styles/Contact.module.css'
import Header from '../Header'
import Footer from '../Footer'

const Contact = ({isDesktop, setShowNavbar, isMediumScreen, isSmallScreen}) => {
  return (
    <div className={styles.container}>
    <Header setColor={'black'}
            isDesktop={isDesktop}
            setShowNavbar={setShowNavbar}
            isMediumScreen={isMediumScreen}
            isSmallScreen={isSmallScreen}/>
    <div className={styles.body}>
      <h1>this is contact</h1>
    </div>
    <Footer/>
    </div>
  )
}

export default Contact