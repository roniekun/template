import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './styles/Home.module.css'
import Faq from '../../assets/faq/Faq'

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
        <button className={styles.btn}>Let&apos;s Connect</button>
        <br />
        <p>"Transforming your special moments into timeless memories."</p>
        <p> "Your expert event photographer, dedicated to preserving your precious moments."</p>
        <div className={styles.scroll}><p >Scroll</p></div>
        <div className={styles.imgContainer}>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        </div>
        </div>

        <div className={styles.sectionTwo}>

        <div><h1>we craft unique and memorable experience through capturing raw 
          emotions that brings picturisque storytelling.</h1>
        </div>

        <div className={styles.card1}>
        <p>We cover all types of events and different sizes</p>
        </div>
        <div className={styles.card2}>
        <p>Our team consist of dedicated members</p>
        </div>
        </div>

        <div className={styles.sectionThree}>

        <div className={styles.circle} id={styles.circle1}>
          <h2> 10 years of experience</h2>
        </div>

        <div className={styles.circle} id={styles.circle3}>
        <h2> More than 100+ satisfied clients</h2>
        </div>
        </div>

        <div className={styles.sectionFour}>
          <h1>Featured Events</h1>
        </div>
        <div className={styles.sectionFour}>
          <h1>Reviews of our clients</h1>
        </div>
        <div className={styles.sectionFour}>
          <h1>Frequently Asked Questions: </h1> <p>(This is for Demo purpose only)</p>
          <br />
          <Faq/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home