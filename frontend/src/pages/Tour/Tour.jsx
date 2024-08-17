import React, { useEffect, useState } from 'react';
import { TourPage } from '../../components';
import { useLocation, useParams } from 'react-router-dom';
import { urlFor, client } from "../../../client";

const Tour = () => {
  const [tours, setTours] = useState([]);
  const { id } = useParams();
  const tour = tours.find(t => t.slug.current === id);

    useEffect(() => {
        const query = "*[_type == 'tour']";

        client.fetch(query)
            .then((data) => {
                setTours(data);
            })
    }, [])
    
  
     console.log(tour)
  if (!tour) {
      return (<div className='app__page'>
        <p>No tour data found!</p>
      </div>)
  }

  return (
    <div className='app__page'>
      <TourPage tour={tour}/>
    </div>
  )
}

export default Tour