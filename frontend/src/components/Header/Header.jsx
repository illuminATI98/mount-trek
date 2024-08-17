import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import './Header.scss'; 

const Header = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
    const background1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const background2Y = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
    const textX = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  
    return (
        <section
          ref={ref}
          className="app__header"
        >
          <motion.div
            className="app__headerbg1" 
            style={{
                y: background1Y,
              }}
          />
          <motion.div
            className="app__headerbg2"
            style={{
                y: background2Y,
              }}
          />
          <div
            className="app__headerbg3"
          />
          <motion.div
            style={{ x: textX }}
            className="app__header-text" 
          >
            <h1>MountTrek</h1>
            <h2>Hegyvidéki Túrák Európában</h2>
          </motion.div>
        </section>
    );
}

export default Header