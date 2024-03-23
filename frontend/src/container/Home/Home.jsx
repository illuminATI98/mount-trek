import React, { useEffect, useState } from 'react';
import './Home.scss'; 
import { images } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";
import { Header, TourCard, SlideShow } from '../../components';

const Home = () => {

    const tours = [
        {
            id: 1,
            title: 'City Tour',
            description: 'Explore the city with our guided tour.',
            price: 50,
            image: {}
        },
        {
            id: 2,
            title: 'Mountain Hike',
            description: 'Hike through breathtaking mountain trails.',
            price: 75,
            image: {}
        },
        {
            id: 3,
            title: 'City Tour',
            description: 'Explore the city with our guided tour.',
            price: 50,
            image: {}
        },
        {
            id: 4,
            title: 'Mountain Hike',
            description: 'Hike through breathtaking mountain trails.',
            price: 75,
            image: {}
        },
    ];

  return (
      <div className="app__home">
        <Header />
        
        <SlideShow />
        <div className='app_home-card-container'>
                {tours.map(tour => (
                    <TourCard key={tour.id} tour={tour}/>
                ))}
        </div>
      </div>
  );
}

export default Home