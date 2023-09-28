import React, { useState } from 'react'; // Import useState
import styles from './Socials.module.css';
import { ReactComponent as FacebookIcon } from './svg/facebook.svg';
import { ReactComponent as InstagramIcon } from './svg/instagram.svg';
import { ReactComponent as GithubIcon } from './svg/github.svg';
import { ReactComponent as LinkedinIcon } from './svg/linkedin.svg';
import { ThemeContext } from '../../context/ThemeContext';

const Socials = ({ 
      displayNames, 
      displayHandles, 
      displayIcons, 
      navSocialLink,
      contactContainer,
      contactSocialLink,
      contactIconContainer,
      footerIconContainer,
      footerContainer,
      footerSocialLink,
      headerIconContainer,
      headerSocialLink,
}) => {

  const socialMediaLinks = [

    { name: 'Github', 
      fill: '#E4405F', 
      icon: <GithubIcon />, 
      url: 'https://www.github.com/roniekun',
      userhandle: '' 
    },

    { name: 'Facebook',
      fill: '#1877F2', 
      icon: <FacebookIcon />, 
      url: 'https://www.facebook.com/ronieuxjpg', 
      userhandle: '' 
    },

    { name: 'Instagram', 
      fill: '#E4405F',
      icon: <InstagramIcon />, 
      url: 'https://www.instagram.com/ronieuxjpg', 
      userhandle: ''
     },

    { name: 'LinkedIn', 
      fill: '#E4405F', 
      icon: <LinkedinIcon />,
      url: 'https://www.linkedin.com/in/roniebenitez', 
      userhandle: '' },
  ];

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className={styles.socialLinksContainer} 
        style={{...contactContainer,...footerContainer}}>
          {socialMediaLinks.map((link) => (
            <div         
              style={{ ...contactIconContainer,...footerIconContainer,...headerIconContainer}} 
              key={link.name}
              className={styles.iconContainer}>  
                <a
                  id={`component-${theme}`}
                  href={link.url}
                  key={link.name}
                  target="_blank"
                  style={{
                    ...footerSocialLink,
                    ...navSocialLink,
                    ...contactSocialLink,
                    ...headerSocialLink
                  }}
                  className={styles.socialLink}
                  rel="noopener noreferrer">
                   {displayNames &&link.name}
                   {displayIcons && link.icon}
                   {displayHandles && link.userhandle}
                </a>
            </div>
          ))}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Socials;
