import React from 'react'
import { Link as AnchorLink } from 'react-router-dom'

function CitiesCard({infoCity}) {
  return (
    <div className="col-md-4 col-xl-3 gap-5">
        <div className="card mb-5">
            <img src={infoCity.image} className="card-img-top"></img>
            <div className="card-body">
                <h2 className="card-title">{infoCity.name}</h2>
                <h5 className="card-text">{infoCity.state}</h5>
                <h4 className="card-text">{infoCity.interestPoint}</h4>
                <AnchorLink to={`/cities/${infoCity._id}`} className='btn'>Details</AnchorLink>
            </div>    
        </div>       
    </div>
  )
}
export default CitiesCard