import React from 'react';
import { connect } from 'react-redux'
import { checkAuth } from '../store/actions/AuthActions';
import LoadingIndicator from './LoadingIndicator';
import Login from './Login';

function withAuth(WrappedComponent) {
    class Wrapper extends React.Component {

        componentDidMouth() {
            this.props.checkAuth().then(result => console.log(result));
        }

        render() {
            if (!this.props.authChecked) {
                return <LoadingIndicator />;
            } else if (!this.props.loggedIn && this.props.protected) {
                return (
                    <>
                        <Login />
                        <p>Please login to view page</p>
                    </>
                );
            } else {
                return <WrappedComponent {...this.props} />;
            }
        }
    }

    const mapStateToProps = ({ authorization: { authChecked, loggedIn, currentUser } }) => {
        return { authChecked, loggedIn, currentUser };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            checkAuth: () => dispatch(checkAuth())
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}

export default withAuth