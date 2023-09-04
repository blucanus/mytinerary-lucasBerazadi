import React, { useEffect, useState } from 'react'
import { getCity } from '../Services/citiesQueries'
import { useParams } from 'react-router-dom'
import './style.css'


export const CityDetails = () => {
    
    const [city, setCity] = useState({})
    const {id} = useParams()

    useEffect(()=> {
        getCity(id)
            .then((city) => {
              setCity(city)
              console.log(city);
            })                      
            .catch((err) => console.log(err)) 
    }, [id])

  return (
    <div className="card">
      <img src={`../${city.image}`} className="card-img-top"></img>
        <div className="card-body">
            <h2 className="card-title">{city.name} | {city.state}</h2>
            <h5 className="card-text">Our Itineraries</h5>
            {/* <h4 className="card-text">Interest Point <blockquote className="blockquote">{city.interestPoint}</blockquote></h4> */}
            
              {city.itinerary?.map((itinerary) =>
                
                  <div className='card itinerary-card' key={itinerary.name}>
                    <div className="card-body">
                      <h5 className="card-title"> {itinerary.name} </h5> 
                      <div className='d-flex flex-row justify-content-start gap-2'>                        
                          <p><i className="fa-solid fa-hand-holding-dollar"></i> {itinerary.price}</p>
                          <p><i className="fa-regular fa-clock"></i> {itinerary.duration}hs</p>
                      </div>
                    </div>                  
                  </div>
                
              )}
        </div>   
    </div>
  )
}
export default CityDetails