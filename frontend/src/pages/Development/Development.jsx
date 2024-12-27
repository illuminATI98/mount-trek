import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import './Development.scss'
import { images } from "../../constants";

const development = () => {
  const box = {
    width: 100,
    height: 100,
    backgroundImage:("/logo.png"),
    borderRadius: 5,
}

  return (
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
        <img className='app__development-logo' src={images.logo} alt="logo"/>
        <div className='app__development-text'>
          Az oldal karbantartás alatt van...
          
        </div>
      </div>
    </div>
  )
}

export default development