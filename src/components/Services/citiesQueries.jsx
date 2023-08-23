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
        console.log(data);
        return data
        
    }catch(err){
        return[]
    }  
}