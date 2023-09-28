import React from 'react'
import styles from './styles/About.module.css'
import Header from '../Header'
import Footer from '../Footer'

const About = ({isDesktop, setShowNavbar, isMediumScreen, isSmallScreen,showNavbar}) => {
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
          <h1>I&apos;m more than a photographer; I'm a visual storyteller. <br />
            Bringing your events to life through the art of storytelling.</h1>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About