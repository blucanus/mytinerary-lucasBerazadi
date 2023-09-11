import React, { useEffect, useRef, useState } from "react";
import { getAllCities } from "../Services/citiesQueries";
import CitiesCard from "../CitiesCard";
import { useSelector, useDispatch } from "react-redux";
import { citiesFilter, loadCities } from "../../redux/actions/citiesActions.js";

function AllCities() {
    const citiesStore = useSelector((store) => store.cities);
    const dispatch = useDispatch();
    const inputSearch = useRef(null)

  //const [cities, setCities] = useState([])
  useEffect(() => {
    getAllCities().then((cities) => dispatch(loadCities(cities)));
    /*  getAllCities()
            .then((data) => setCities(data))            
            .catch((err) => console.log(err)) */
  }, []);
    const handleInput = () => {
        const search = inputSearch.current.value
        let query = '?name='+ search
        dispatch(citiesFilter(query))
    }
  
  return (
    <>
    <input type="text" name="search" id="search" onInput={handleInput} ref={inputSearch} className="form-control mb-4"/>
      {citiesStore.filteredCities.map((city) => (
        <CitiesCard key={city._id} infoCity={city} />
      ))}
    </>
  );
}
export default AllCities;
