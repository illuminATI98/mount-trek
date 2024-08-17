import React from 'react';
import './TourCard.scss'; 
import { motion } from "framer-motion";
import { urlFor, client } from "../../../client";
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
    const date = new Date(tour.date);
    const formatDate = date.toLocaleDateString('en-GB');

    let thumbnailUrl = '';
    if (tour.thumbnail) {
        try {
            thumbnailUrl = urlFor(tour.thumbnail).url();
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
                <Link 
                    to={{
                        pathname: `/tour/${tour.slug.current}`,
                        state: { tour },
                      }}
                    className="app__tourCard-link"
                >
                    <img src={thumbnailUrl} alt={tour.name} className="app__tourCard-image" />
                </Link>

                <div className="app__tourCard-content">

                    <h2 className="app__tourCard-title">{tour.name}</h2>

                    <p className="app__tourCard-description">{tour.description}</p>

                    <div className="app__tourCard-info">
                        <div className='app__tourCard-info-date'>{formatDate}</div>
                        <div className='app__tourCard-info-price'>€{tour.price}</div>
                    </div>
                </div>
            </motion.div>
        
    );
};

export default TourCard;