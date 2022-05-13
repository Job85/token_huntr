import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LocationList = () => {

    const [location, setLocations] = useState([])
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    useEffect(() => {
        const GetLocations = async () => {
            await sleep(6000);
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
                        <span className='location-card-span'>
                            Coordinates: {cache.latitude},{cache.longitude}
                        </span>
                        <span className='location-card-span'>
                            Difficulty Level: {cache.level}
                        </span>
                        <Link to={`/locations/${location.id}`}>
                            <button>
                                Edit Location
                            </button>
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default LocationList