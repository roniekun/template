import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './styles/Home.module.css'

const Home = ({isDesktop,setShowNavbar,isMediumScreen, isSmallScreen, showNavbar}) => {
  return (
    <div className={styles.container}>
      <Header isDesktop={isDesktop}
              isMediumScreen={isMediumScreen}
              isSmallScreen={isSmallScreen}
              setShowNavbar={setShowNavbar}
              setColor={'black'}
              showNavbar={showNavbar}/>
      <div className={styles.body}>
        <div className={styles.sectionOne}>
        <h1 className={styles.title}>
         <span>Some text here</span> <br /> (identity of your brand).
        </h1>
        <div className={styles.imgContainer}>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home