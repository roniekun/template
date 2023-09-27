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
        Capturing <strong>MOMENTS </strong> <br />  that last a <br /><span> LIFETIME. </span> 
        </h1>
        <button className={styles.btn}>Work with us</button>
        <p>"Transforming your special moments into timeless memories."</p>
       <p> "Your expert event photographer, dedicated to preserving your precious moments."</p>

        <div className={styles.imgContainer}>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        </div>
        </div>

        <div className={styles.sectionTwo}>
        <div className={styles.card1}>
        <p>We cover all types of events and different sizes</p>
        </div>
        <div className={styles.card2}>
        <p>Our team consist of dedicated members</p>
        </div>
        
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home