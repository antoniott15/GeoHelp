import axios from "axios";

// ARRAY OF COUNTRY PERMITED 
const countryPermited: Array<String> = ["Peru"]
//URL TO REQUEST
const BASE_URL: string = "https://ipapi.co/json"

// getCountryPermissions returns boolean, true if is permited check APP.TSX
const getCountryPermissions = async () =>{
    let result = await axios.get(BASE_URL)
    for(let elements of countryPermited){
        if(result?.data?.country_name === elements){
            return true;
        }
    }
    return false;
    
}

export {getCountryPermissions};