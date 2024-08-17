import React from 'react';
import './TourPage.scss'; 
import { motion } from "framer-motion";
import { urlFor, client } from "../../../client";
import {PortableText} from '@portabletext/react';


const TourPage = ({ tour }) => {
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
    <div className='app__tourPage'>
      <div className='app__tourPage-thumbnail'>
        
        <h1>{tour.name}</h1>
      </div>


      <PortableText
        value={tour.details}
      />
    </div>
  )
}

export default TourPage