import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../redux';

function SignInLinks({ signOutUser, initials }) {
    return (
        <ul className='right'>
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/' onClick={() => signOutUser()}>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        signOutUser: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLinks)
