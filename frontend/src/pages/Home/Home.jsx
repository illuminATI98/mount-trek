import React, { useEffect, useState } from 'react';
import './Home.scss'; 
import { images } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";
import { Header, TourCard, SlideShow } from '../../components';
import { urlFor, client } from "../../../client";

const Home = () => {
    const [tours, setTours] = useState([]);


    useEffect(() => {
        const query = "*[_type == 'tour']";

        client.fetch(query)
            .then((data) => {
                setTours(data);
            })
    }, [])
   
  return (
      <div className="app__home">
        <Header />
        
        <SlideShow />
        <div className='app__home-card-container'>
                {tours.map(tour => (
                    <TourCard key={tours.indexOf(tour)} tour={tour}/>
                ))}
        </div>
      </div>
  );
}

export default Home