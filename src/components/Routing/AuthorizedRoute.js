import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

function AuthorizedRoute({ auth, component: Component, ...rest }) {
    return (
        <Route {...rest}
            render={
                props => ( auth.uid ? <Component {...props} /> : <Redirect to={{ pathname: '/signin', state: {from: props.location} }} /> )
            }
        />
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(AuthorizedRoute)
