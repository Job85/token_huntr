import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// useLocation, useNavigate



const EditForm = () => {
    // const location_id = useParams
    const [cache, setCache] = useState({})
    const [formValues, setFormValues] = useState({
        latitude: '',
        longitude: '',
        level: ''
    })
    let { location_id } = useParams()

    useEffect(() => {
        let isCancelled = false
        const getCache = async () => {
            const res = await axios.get(
                `http://localhost:3001/api/location/${location_id}`
            )
            if (!isCancelled) {
                setCache(res.data)
            }
        }
        getCache()
        return () => {
            isCancelled = true
        }
    }, [location_id])

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const UpdateCache = async () => {
        let url = process.env.NODE_ENV === `http://localhost:3001/api/location/update_cache/${location_id}`
        await axios({
            url,
            method: 'put',
            data: formValues
        })
    }
    const handleSubmit = async (e) => {
        console.log('button clicked')
        e.preventDefault();
        UpdateCache()
        setFormValues({
            latitude: '',
            longitude: '',
            level: ''
        })
        axios.put(`http://localhost:3001/api/location/update_cache/${location_id}`, formValues)
        // navigate('/locations');
        // window.refresh.reload(false)
    }


    return (
        <div className="locations">
            <div className="edit-container">
                <div className="edit-card">
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <span>
                                <label htmlFor="latitude">Latitude:</label>
                                <input
                                    value={formValues.latitude}
                                    // value={cache.latitude}
                                    type="text"
                                    placeholder={cache.latitude}
                                    name='latitude'
                                    onChange={handleChange}
                                    // onChange={(e) => { setLatitude(e.target.value) }}
                                    required
                                />
                            </span>
                            <span>
                                <label htmlFor="longitude">Longitude:</label>
                                <input
                                    value={formValues.longitude}
                                    // value={cache.longitude}
                                    type="text"
                                    placeholder={cache.longitude}
                                    name='longitude'
                                    onChange={handleChange}
                                    // onChange={(e) => { setLongitude(e.target.value) }}
                                    required
                                />
                            </span>
                            <span>
                                <label htmlFor="level">Level:</label>
                                <select
                                    placeholder={cache.level}
                                    // value={cache.level}
                                    value={formValues.level}
                                    name='level'
                                    onChange={handleChange}
                                // onChange={(e) => { setLevel(e.target.value) }}
                                >
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </span>
                        </ul>
                    </form>
                </div>
                <div>
                    <button>Save</button>
                </div>
                {/* <div onClick={() => handleDelete(gotCache.id)}>
                    <button id="deleteButton" type="submit">Delete Cache</button>
                </div> */}
            </div>
        </div >
    )
}

export default EditForm

// let navigate = useNavigate()
// const location_id = location.id
// const refresh = useLocation();



// let GetCache = async () => {
//     let pendingCache = await axios.get(`http://localhost:3001/api/location/${location_id}`)
//     return pendingCache
// }

    // const handleChange = (e) => {
        //     updateCache({ ...retrievedCache, [e.target.name]: e.target.value })
        // }

         // const [latitude, setLatitude] = useState('');
    // const [longitude, setLongitude] = useState('');
    // const [level, setLevel] = useState('');


    // // const [pendingCache, setCache] = useState()
    // const [location, setLocations] = useState([])
    // // const location_id = location.id
    // let { location_id } = useParams
    // console.log(location_id)

    // const GetCache = async () => {
    //     const location = await axios.get(`http://localhost:3001/api/location/${location_id}`)
    //     setLocations(location.data)
    //     console.log(location.data)
    // }


 //
    // const handleSave = async () => {
    //     await axios.put(`http://localhost:3001/api/location/update_cache/${location_id}`)
    // }

    // const handleDelete = async (locationId) => {
    //     await axios.delete(`http://localhost:3001/api/location/delete_cache/${location_id}`).then(
    //         () => navigate('/locations')
    //     )
    // }

    // window.onload = GetCache()
