import React, { useEffect, useState } from 'react';
import './Home.scss'; 
import { images } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from '../../components/Header/Header';

const Home = () => {

  return (
      <div className="app__home">
          <Header />
      </div>
  );
}

export default Home