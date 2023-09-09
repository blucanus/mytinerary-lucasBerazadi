import React, { useEffect, useState } from 'react'
import { getAllCities } from '../Services/citiesQueries'
import CitiesCard from '../CitiesCard'
import { useSelector, useDispatch } from 'react-redux'
import { loadCities } from '../../redux/actions/citiesActions.js'

function AllCities() {

    const citiesStore = useSelector((store) => store.cities)

    const dispatch = useDispatch()

    //const [cities, setCities] = useState([])
    useEffect(()=> {
        getAllCities().then(cities => dispatch(loadCities(cities)))
       /*  getAllCities()
            .then((data) => setCities(data))            
            .catch((err) => console.log(err)) */
            
    }, [])
    

    return (
       <>
         {citiesStore.filteredCities.map((city) =>(
                <CitiesCard key={city._id} infoCity={city} />
           ))}
       </>
    )
}
export default AllCities 