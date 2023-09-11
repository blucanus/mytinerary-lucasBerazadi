import React from 'react'
import { Link as AnchorLink } from 'react-router-dom'

export default function Carousel({infoCity}) {
  return (
    <>
        <li className="carousel__slide">
            <div className="carousel__snapper" style={{backgroundImage: `url(${infoCity.image})`}}>
            <AnchorLink className='btn btn-outline-dark position-absolute bottom-0 end-0 me-3 mb-3' to={`/cities/${infoCity._id}`}>{infoCity.name}</AnchorLink>
            </div>
        </li>
    </>
  )
}
