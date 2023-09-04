import axios from "axios";

const cities = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getAllCities = async() => {
    try {
        const {data} = await cities("api/cities")
        return data
    }catch(err){
        return[]
    }  
}
export const getCity = async(id) => {
    try {
        const {data} = await cities("api/cities/"+id)
        return data
        
    }catch(err){
        return[]
    }  
}
export const getIntineraryByCityId = async(id) => {
    try {
        const {dataItinerary} = await cities("api/itinerary"+id)
        return dataItinerary

    }catch(err){
        return[]
    }  
}