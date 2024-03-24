import React from 'react';
import './TourCard.scss'; 
import { motion } from "framer-motion";

const TourCard = ({ tour }) => {
    return (
        <motion.div 
            className="app__tourCard"
            whileInView={{y:[100,0], opacity:[0,1]}}
            transition={{duration: 0.5}}
            key={tour.id}
        >
            <p className='app__tourCard-availability'>{tour.availability === true ?"Available" : "Unavailable"}</p>
            <img src={tour.image} alt={tour.title} className="app__tourCard-image" />

            <div className="app__tourCard-content">

                <h2 className="app__tourCard-title">{tour.title}</h2>

                <p className="app__tourCard-description">{tour.description}</p>

                <div className="app__tourCard-info">
                    <div className='app__tourCard-info-date'>{tour.date}</div>
                    <div className='app__tourCard-info-price'>€{tour.price}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default TourCard;