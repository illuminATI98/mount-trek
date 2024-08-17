import React from 'react';
import './TourCard.scss'; 
import { motion } from "framer-motion";
import { urlFor, client } from "../../../client";

const TourCard = ({ tour }) => {
    const date = new Date(tour.date);
    const formatDate = date.toLocaleDateString('en-GB');

    let thumbnailUrl = '';
    if (tour.image) {
        try {
            thumbnailUrl = urlFor(tour.image[0]).url();
        } catch (error) {
            console.error('Error generating image URL:', error);
        }
    }
    
    return (
        <motion.div 
            className="app__tourCard"
            whileInView={{y:[100,0], opacity:[0,1]}}
            transition={{duration: 0.5}}
            key={tour.id}
        >
            <p className={tour.availability === true ?"app__tourCard-availability true" : "app__tourCard-availability false"}>{tour.availability === true ?"Available" : "Unavailable"}</p>
            <img src={thumbnailUrl} alt={tour.name} className="app__tourCard-image" />

            <div className="app__tourCard-content">

                <h2 className="app__tourCard-title">{tour.name}</h2>

                <p className="app__tourCard-description">{tour.details}</p>

                <div className="app__tourCard-info">
                    <div className='app__tourCard-info-date'>{formatDate}</div>
                    <div className='app__tourCard-info-price'>€{tour.price}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default TourCard;