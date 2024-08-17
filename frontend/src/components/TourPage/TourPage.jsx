import React from 'react';
import './TourPage.scss'; 
import { motion } from "framer-motion";
import { urlFor, client } from "../../../client";

const TourPage = ({ tour }) => {
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
    <div className='app_tourPage'>
      <div className='app_tourPage-thumbnail'>
        <img src={thumbnailUrl} alt={tour.name} />
        <h1>{tour.name}</h1>
      </div>


      <div>{tour.details}</div>
    </div>
  )
}

export default TourPage