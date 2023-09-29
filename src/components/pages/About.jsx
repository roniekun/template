import React from 'react'
import styles from './About.module.css'
import Header from '../Header'
import Footer from '../Footer'
import Cta from '../../assets/call-to-actions/Cta'

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
          <h1>I&apos;m more than a photographer; I'm a visual storyteller. 
           </h1>
           <h4> Bringing your events to life through the art of storytelling.</h4>
         
           <div className={styles.imageContainer}>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Illo fugiat perspiciatis magni nulla, numquam enim velit cumque aliquam maiores vero excepturi, 
             delectus obcaecati ducimus magnam pariatur, modi non quas ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime quisquam natus. Quos iure distinctio veniam, 
             excepturi placeat natus deleniti quas a ratione enim, sunt aspernatur dicta quam praesentium tempore?
             </p>

            <img className={styles.image}src="" alt="" />
           </div>
        </div>
        
        <div className={styles.sectionTwo}>
          <h1>Skills</h1>
        </div >
        <div className={styles.sectionThree}
        ><h1>Awards</h1></div>
      </div>
        <Cta/>
      <Footer/>
    </div>
  )
}

export default About