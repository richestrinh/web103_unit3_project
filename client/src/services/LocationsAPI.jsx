const locationsURL = 'http://localhost:3000/locations'


const getAllLocations = async () => {
    const response = await fetch(locationsURL + '/')
    const data = await response.json();
    return data;
}

const getLocationById = async () => {
    const response = await fetch(`${locationsURL}/${id}`);
    const data = await response.json();
    return data;
}


export default {
    getAllLocations,
    getLocationById
};




















// import { useParams } from "react-router-dom";

// const LocationsAPI = () => {
//     const { id } = useParams();

//     const getAllLocations = async () => {
//     }

//     const getLocationById = async () => {
//         const response = await fetch('/' + id);
//         const data = await response.json();
//         return data;
//     }

//     return {
//         getAllLocations,
//         getLocationById
//     };

// }

// export default LocationsAPI;
