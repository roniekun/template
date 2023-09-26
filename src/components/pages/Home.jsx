import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './styles/Home.module.css'

const Home = ({isDesktop,setShowNavbar,isMediumScreen, isSmallScreen}) => {
  return (
    <div className={styles.container}>
      <Header isDesktop={isDesktop}
              isMediumScreen={isMediumScreen}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
              setColor={'black'}/>
      <div className={styles.body}>
        <h1>this is home</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Home