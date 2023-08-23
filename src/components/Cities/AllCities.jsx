import React, { useEffect, useState } from 'react'
import { getAllCities } from '../Services/citiesQueries'
import CitiesCard from '../CitiesCard'

function AllCities() {

    const [cities, setCities] = useState([])
    useEffect(()=> {
        getAllCities()
            .then((data) => setCities(data))            
            .catch((err) => console.log(err))
            
    }, [])
    

    return (
       <>
         {cities.map((city) =>(
                <CitiesCard key={city._id} infoCity={city} />
           ))}
       </>
    )
}
export default AllCities 