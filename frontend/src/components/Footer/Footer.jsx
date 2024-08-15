import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.scss'
import { FaFacebook, FaInstagram, FaPhone} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
            <h1 className='footer-contacts-title'>Elérhetőségek</h1>
            <a href="mailto:contact@mounttrek.hu" > <MdEmail /> contact@mounttrek.hu</a>
            <a href='tel:+36 1 234 5678'> <FaPhone /> +36 1 234 5678</a>
            <div className='footer-socials'>
              <span onClick={openInstagramPage}>< FaInstagram /></span>
              <span onClick={openFacebookPage}>< FaFacebook /></span>
            </div>
          </div>
          <div className='footer-links'>
          <nav>
          <ul className='app__navbar-links'>
            {[
              { name: "Kezdőlap", path: "/" },
              { name: "Túrák", path: "/tours" },
              { name: "Rólunk", path: "/about" },
              { name: "Galéria", path: "/gallery" },
              { name: "Kapcsolat", path: "/contact" }
            ].map((item) => (
              <li key={`link-${item.name}`}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
            </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-copyright'>
            <p>© 2024 MountTrek Ltd</p>
          </div>
          <div className='footer-links2'>
          <ul>
                {["Adatkezelési tájékoztató", "Impresszum", "Általános Szerződési Feltételek"].map((item) => (
                  <li key={`link-${item}`}>
                    <a href={`#${item}`} >{item}</a>
                  </li>
                  ))}
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer