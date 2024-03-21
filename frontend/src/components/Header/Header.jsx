import React, { useEffect, useState } from 'react';
import './Header.scss'; 
import { images } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
      <div className="app__header">
          <motion.div className="header-photo" style={{ y: -scrollY * 0.5 }}>
              {}
          </motion.div>
          <div className="welcome-text">
              <h1>Welcome to MountTrek</h1>
              <p>Scroll down to explore more</p>
          </div>
      </div>
  );
}

export default Header