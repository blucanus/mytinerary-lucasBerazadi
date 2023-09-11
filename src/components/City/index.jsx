import React, { useEffect, useState } from 'react'
import { getCity } from '../Services/citiesQueries'
import { useParams } from 'react-router-dom'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { loadItineraries } from '../../redux/actions/itinerariesActions'
import { Link as AnchorLink } from 'react-router-dom'


export const CityDetails = () => {

  const itinerariesStore = useSelector((store) => store.itineraries)
  const dispatch = useDispatch()

    //const [city, setCity] = useState({})
    const {id} = useParams()

    useEffect(()=> {
        getCity(id)
            .then((city) => {
              dispatch(loadItineraries(city))
              //setCity(city)
              //console.log(city);
            })                      
            .catch((err) => console.log(err)) 
    }, [id])

  return (
    <div className="card p-0">
      <img src={`../${itinerariesStore.allItineraries.image}`} className="card-img"></img>
      <div className="card-overlay p-3 mb-3 me-5">
        <h2 className="card-title">{itinerariesStore.allItineraries.name} | {itinerariesStore.allItineraries.state}</h2>
        <h5 className="card-text">Our Itineraries</h5>
        <div className="row">
        {/* <h4 className="card-text">Interest Point <blockquote className="blockquote">{city.interestPoint}</blockquote></h4> */}
        
          {itinerariesStore.allItineraries.itinerary?.map((itinerary) =>
            
              <div className='itinerary-card' key={itinerary.name}>
                <div className="card-body">
                  <h5 className="card-title"> {itinerary.name} </h5> 
                  <div className='d-flex flex-row justify-content-start gap-2'>                        
                      <p className="m-0"><i className="fa-solid fa-hand-holding-dollar"></i> {itinerary.price}</p>
                      <p className="m-0"><i className="fa-regular fa-clock"></i> {itinerary.duration}hs</p>
                  </div>
                </div>                  
              </div>
            
          )}
        </div>
        <div className="footer">
          <AnchorLink to={`/cities`} className='btn btn-outline-dark'>Back</AnchorLink>
        </div>
      </div>
     
    </div>
  )
}
export default CityDetails