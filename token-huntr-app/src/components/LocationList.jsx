import { connect } from 'react-redux'

const LocationList = (props) => {

    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {}
}

const mapActionsToProps = (dispatch) => {
    console.log(dispatch)
    return {}
}


export default connect(mapStateToProps, mapActionsToProps)(LocationList)