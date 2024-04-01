import { React , useState } from 'react'
import "./Navbar.scss";
import { images } from "../../constants";
import {HiMenu, HiX} from "react-icons/hi";
import { FaInstagram, FaFacebookSquare, FaPhone  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const openFacebookPage = () => {
    window.open('https://www.facebook.com/groups/mounttrek', '_blank');
  };

  const openInstagramPage = () => {
      window.open('https://www.instagram.com/mounttrek.eu/', '_blank');
  };

  return (
    <nav className='app__navbar'>

      <menu className='app__navbar-topline'>
        <div className='app__navbar-contacts'>
          <span> <MdEmail /> contact@mounttrek.hu</span>
          <span> <FaPhone /> +36 1 234 5678</span>
        </div>
        <div className='app__navbar-socials'>
          <a onClick={openInstagramPage}><FaInstagram /></a>
          <a onClick={openFacebookPage}><FaFacebookSquare /></a>
        </div>
      </menu>

      <menu className='app__navbar-bottomline'>

        <div className='app__navbar-logo'>
          <img src={images.logo} alt="logo" />
        </div>

        <ul className='app__navbar-links'>
          {["Kezdőlap", "Túrák", "Rólunk", "Információk", "Galéria", "Kapcsolat"].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className='app__navbar-menu'>
          <HiMenu onClick={() => setToggle(true)}/>
          <AnimatePresence>
            {toggle && (
              <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 20 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 50, duration: 0.5 }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul className='app__navbar-links'>
                  {["Kezdőlap", "Túrák", "Rólunk", "Információk", "Galéria", "Kapcsolat"].map((item) => (
                    <li key={`link-${item}`}>
                      <a href="#" onClick={() => setToggle(false)}>{item}</a>
                    </li>
                    ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </menu>
    </nav>
  )
}

export default Navbar