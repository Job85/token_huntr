import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteLocation = () => {
    // let navigate = useNavigate()

    let { location_id } = useParams

    const DeleteCache = async () => {
        let url = process.env.NODE_ENV === `http://localhost:3001/api/location/delete_cache/${location_id}`
        await axios.delete(url);
    }
    const handleDelete = () => {
        DeleteCache();
        // navigate('/locations');
        // window.location.reload(false)
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete Cache</button>
        </div>
    )
}

export default DeleteLocation