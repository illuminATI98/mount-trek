import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import './Development.scss'
import { images } from "../../constants";
import { FaInstagram, FaFacebookSquare, FaPhone  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const development = () => {
  const openGoogleSheetPage = () => {
    window.open('https://docs.google.com/spreadsheets/d/1SI4Ifunb7cjN8yZi0d6xEie6kgufLkhFl-OM-a0QL3E/edit?gid=0#gid=0', '_blank');
  };
  const openFacebookPage = () => {
    window.open('https://www.facebook.com/groups/mounttrek', '_blank');
  };

  const openInstagramPage = () => {
      window.open('https://www.instagram.com/mounttrek.eu/', '_blank');
  };
  return (
    <>
      <nav className='app__navbar'>
        <menu className='app__navbar-topline'>
          <div className='app__navbar-contacts'>
            
          </div>
          <div className='app__navbar-socials'>
            <a onClick={openInstagramPage}><FaInstagram /></a>
            <a onClick={openFacebookPage}><FaFacebookSquare /></a>
          </div>
        </menu>
        <menu className='app__navbar-bottomline dev'>
          <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
          </div>
          <h1>MountTrek - Túrák a hegyek között</h1>
        </menu>
      </nav>
      <div className='app__development'>
      <div className='app__development-blur'>
        <motion.img
              animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
              }}
              className='app__development-logoframe'
        />
        <img className='app__development-logo' onClick={openGoogleSheetPage} src={images.logo} alt="logo"/>
        <div className='app__development-text'>
          Üdvözlünk a MountTrek honlapján! Weboldalunk fejlesztés alatt áll, de lentebb már elérhető a túranaptárunk. Nézz körül, és találd meg a következő kalandodat!
        </div>
        <a onClick={openGoogleSheetPage} className='app__development-button'>Naptár</a>
      </div>
    </div>
    </>
  )
}

export default development