import React, { useEffect, useState } from 'react'
import { getCity } from '../Services/citiesQueries'
import { useParams } from 'react-router-dom'


export const CityDetails = () => {
    
    const [city, setCity] = useState({})
    const {id} = useParams()
    useEffect(()=> {
        getCity(id)
            .then((data) => setCity(data))                      
            .catch((err) => console.log(err))          
            
    }, [id])
    console.log(city); 

  return (
    <div className="card">
      <img src={`../${city.image}`} className="card-img-top"></img>
        <div className="card-body">
            <h2 className="card-title">{city.name}</h2>
            <h5 className="card-text">{city.state}</h5>
            <h4 className="card-text">Interest Point <blockquote className="blockquote">{city.interestPoint}</blockquote></h4>
        </div>   
    </div>
  )
}
export default CityDetails