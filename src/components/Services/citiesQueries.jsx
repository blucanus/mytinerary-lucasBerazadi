import axios from "axios";

const conect = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getAllCities = async() => {
    try {
        const {data} = await conect("api/cities")
        return data
    }catch(err){
        return[]
    }  
}
export const getCity = async(id) => {
    try {
        const {data} = await conect("api/cities/"+id)
        //console.log(data + " city");
        return data
        
    }catch(err){
        return[]
    }  
}
/* export const getItineraryByCityId = async(id) => {
    try {
        
        const {data} = await conect("api/itinerary/"+id) 
        //console.log(data);
        return data
        

    }catch(err){
        return[]
    }  
} */