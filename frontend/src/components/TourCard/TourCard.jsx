import React from 'react';
import './TourCard.scss'; 

const TourCard = ({ tour }) => {
    return (
        <div className="tourCard">
            <img src={tour.image} alt={tour.title} className="tourCard-image" />
            <div className="tourCard-content">
                <h2 className="tourCard-title">{tour.title}</h2>
                <p className="tourCard-description">{tour.description}</p>
                <p className="tourCard-price">${tour.price}</p>
                <button className="tourCard-button">Book Now</button>
            </div>
        </div>
    );
};

export default TourCard;