import { connect } from 'react-redux';
import { LoadLocations } from '../store/actions/LocationActions';
import { useEffect } from 'react';

const mapStateToProps = ({ locationsState }) => {
    return { locationsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLocations: () => dispatch(LoadLocations())
    }
}

const LocationList = (props) => {

    useEffect(() => {
        props.fetchLocation()
    }, [])

    return (
        <div>
            {props.locationsState.location.map((location) => (
                <div className='cache' key={location.id}>
                    <h2>{location.latitude},{location.longitude}</h2>
                </div>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationList)