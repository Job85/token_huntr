import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';


const LocationList = (props) => {
    const [location, setLocations] = useState([])
    // const location_id = location.id;
    // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    // let url = process.env.NODE_ENV === `http://localhost:3001/api/location`
    useEffect(() => {
        const GetLocations = async () => {
            // await sleep(6000);
            const location = await axios.get(`http://localhost:3001/api/location`)
            setLocations(location.data)
            console.log(location)
        }
        GetLocations()
            .catch(console.error)
    }, [])

    return (
        <div>
            <h1>GeoCache Locations</h1>
            <div>
                {location.map((cache, i) => (
                    <li className='location-card' key={i}>
                        <span className='location-card-span'>Coordinates: {cache.latitude},{cache.longitude}</span>
                        <span className='location-card-span'>Difficulty Level: {cache.level}</span>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default LocationList //connect(mapStateToProps, mapDispatchToProps)()