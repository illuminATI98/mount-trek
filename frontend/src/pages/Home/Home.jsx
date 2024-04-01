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
            date: "2024.04.20.",
            price: 50,
            image: "https://cdn-production.checkfront.com/wp-content/uploads/2021/07/marketing-tours-online-with-woman-traveling-by-boat-in-thailand.jpeg"
        },
        {
            id: 2,
            title: 'Mountain Hike',
            description: 'Hike through breathtaking mountain trails.',
            date: "2024.04.20.",
            price: 75,
            image: "https://cdn-production.checkfront.com/wp-content/uploads/2021/07/marketing-tours-online-with-woman-traveling-by-boat-in-thailand.jpeg"
        },
        {
            id: 3,
            title: 'City Tour',
            description: 'Explore the city with our guided tour.',
            date: "2024.04.20.",
            price: 50,
            image: "https://cdn-production.checkfront.com/wp-content/uploads/2021/07/marketing-tours-online-with-woman-traveling-by-boat-in-thailand.jpeg"
        },
        {
            id: 4,
            title: 'Mountain Hike',
            description: 'Hike through breathtaking mountain trails.',
            date: "2024.04.20.",
            price: 75,
            image: "https://cdn-production.checkfront.com/wp-content/uploads/2021/07/marketing-tours-online-with-woman-traveling-by-boat-in-thailand.jpeg"
        },
    ];

  return (
      <div className="app__home">
        <Header />
        
        <SlideShow />
        <div className='app__home-card-container'>
                {tours.map(tour => (
                    <TourCard key={tour.id} tour={tour}/>
                ))}
        </div>
      </div>
  );
}

export default Home