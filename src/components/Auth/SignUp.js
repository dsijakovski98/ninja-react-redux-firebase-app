import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../redux';

function SignUp({ authError, signUp }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            password
        }

        signUp(newUser);
    }

    const error = authError 
    ? (
        <div className='red-text center'>
            <h6><strong>{authError.message}</strong></h6>
        </div>
    )
    : null;

    return (
        <div className='container'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h5 className='gray-text text-darken-3'>Sign Up</h5>
                { error }
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' onChange={e => setEmail(e.target.value)} value={email} />
                </div>

                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={e => setPassword(e.target.value)} value={password} />
                </div>

                <div className='input-field'>
                    <label htmlFor='first-name'>First Name</label>
                    <input type='text' id='first-name' onChange={e => setFirstName(e.target.value)} value={firstName} />
                </div>

                <div className='input-field'>
                    <label htmlFor='last-name'>Last Name</label>
                    <input type='text' id='last-name' onChange={e => setLastName(e.target.value)} value={lastName} />
                </div>

                <div className='input-field'>
                    <button className='btn pink lighten-1'>Sign up</button>
                </div>

                

            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
