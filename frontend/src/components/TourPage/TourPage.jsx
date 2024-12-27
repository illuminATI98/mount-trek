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
        <img src={thumbnailUrl} alt={tour.name} className="app__tourPage-image" />
        <h1 className='app__tourPage-title'>{tour.name}</h1>
      </div>
      <div className='app__tourPage-navigation'>
        <ul>
          {[
            { name: "Részletek"},
            { name: "Program"},
            { name: "További tudnivalók"},
          ].map((item) => (
            <li className='app__flex p-text' key={`link-${item.name}`}>
              <button >{item.name}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='app__tourPage-details'>
        <PortableText
          value={tour.details}
        />
      </div>
    </div>
  )
}

export default TourPage