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

const Location = (props) => {
    useEffect(() => {
        props.fetchLocations()
    }, [])

    return (
        <div>
            {props.locationsState.locations.map((location))}
        </div>
    )
}