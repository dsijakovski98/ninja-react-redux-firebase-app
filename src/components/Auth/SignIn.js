import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../redux';

function SignIn({ authError, signIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      const credentials = {
          email,
          password
      }

      signIn(credentials);
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
                <h5 className='gray-text text-darken-3'>Sign In</h5>
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
                    <button className='btn pink lighten-1'>Login</button>
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

const  mapDispatchToProps = dispatch => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
