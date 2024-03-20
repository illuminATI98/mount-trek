import { React , useState } from 'react'
import "./Navbar.scss";
import { images } from "../../constants";
import {HiMenu, HiX} from "react-icons/hi";
import { FaInstagram, FaFacebookSquare, FaPhone  } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>

      <menu className='app__navbar-topline'>
        <div className='app__navbar-contacts'>
          <span> <MdAlternateEmail /> contact@mounttrek.hu</span>
          <span> <FaPhone /> +36 1 234 5678</span>
        </div>
        <div className='app__navbar-socials'>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookSquare /></a>
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
          {toggle && (
            <motion.div
            animate={{ x: [300, 0] }}
            transition={{ type: "spring", stiffness: 20, damping: 10}}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul className='app__navbar-links'>
                {["Kezdőlap", "Túrák", "Rólunk", "Információk", "Galéria", "Kapcsolat"].map((item) => (
                  <li key={`link-${item}`}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                  ))}
              </ul>
            </motion.div>
          )}
        </div>
      </menu>
    </nav>
  )
}

export default Navbar