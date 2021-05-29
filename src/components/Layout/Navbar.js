import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';

function Navbar({ auth, profile }) {
    const links = auth.uid ? <SignInLinks initials={profile.initials}/> : <SignOutLinks />

    return (
        <nav className='nav-wrapper grey darken-3' >
            <div className='container'>
                <Link to='/' className='brand-logo'>MarioPlan</Link>
                { auth.isLoaded && links }
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
