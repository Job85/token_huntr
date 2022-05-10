import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadLocations } from '../store/actions/LocationActions'
import { useEffect } from 'react'

const mapStateToProps = ({ locationsState }) => {
    return { locationsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLocations: () => dispatch(LoadLocations())
    }
}

const LocationForm = (props) => {

    return (
        <form>
            <input type='text'
                name='newLocation'
                value={props.newLocation.latitude}
                onChange={props.handleChange}
            />
            <input type='text'
                name='newLocation'
                value={props.newLocation.longitude}
                onChange={props.handleChange}
            />
            <input type='text'
                name='newLocation'
                value={props.newLocation.level}
                onChange={props.handleChange}
            />
            <button type='submit' onClick={props.handleSubmit}>
                Add Location
            </button>
        </form>
    )
}

export default LocationForm