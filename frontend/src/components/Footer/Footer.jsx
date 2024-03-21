import React from 'react'
import './Footer.scss'
import { FaFacebook, FaInstagram, FaPhone} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  const openFacebookPage = () => {
    window.open('https://www.facebook.com/groups/mounttrek', '_blank');
  };

  const openInstagramPage = () => {
      window.open('https://www.instagram.com/mounttrek.eu/', '_blank');
  };


  return (
    <div className='footer-bg'>
      <div className='footer'>
        <div className='footer-top'>
          <div className='footer-contacts'>
            <h1 className='bold-text'>Elérhetőségek</h1>
            <a href="mailto:contact@mounttrek.hu" > <MdAlternateEmail /> contact@mounttrek.hu</a>
            <a href='tel:+36 1 234 5678'> <FaPhone /> +36 1 234 5678</a>
            <div className='footer-socials'>
              <span onClick={openInstagramPage}>< FaInstagram /></span>
              <span onClick={openFacebookPage}>< FaFacebook /></span>
            </div>
          </div>
          <div className='footer-links'>
              <ul>
                {["Kezdőlap", "Túrák", "Rólunk", "Galéria", "Kapcsolat"].map((item) => (
                  <li key={`link-${item}`}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                  ))}
              </ul>
            </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-copyright'>
            <p>© 2024 MountTrek Ltd</p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Footer