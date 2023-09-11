import axios from "axios";

const conect = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getAllCities = async(queryParams="") => {
    try {
        console.log(queryParams);
        const {data} = await conect("api/cities/"+queryParams)
        
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
