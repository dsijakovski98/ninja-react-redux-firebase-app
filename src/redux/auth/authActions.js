import authTypes from './authTypes';
import { firebase, firestore } from '../../config/fbConfig';

const signInSuccess = () => {
    return {
        type: authTypes.SIGNIN_SUCCESS
    }
}

const signInError = (err) => {
    return {
        type: authTypes.SIGNIN_ERROR,
        payload: err
    }
}

const signOutSuccess = () => {
    return {
        type: authTypes.SIGNOUT_SUCCESS
    }
}

const signUpSuccess = () => {
    return {
        type: authTypes.SIGNUP_SUCCESS
    }
}

const signUpError = err => {
    return {
        type: authTypes.SIGNUP_ERROR,
        payload: err
    }
}



export const signIn = (credentials) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
            dispatch(signInSuccess());
        })
        .catch(err => {
            dispatch(signInError(err));
        })
    }
}

export const signOut = () => {
    return dispatch => {
        firebase.auth().signOut()
        .then(() => {
            dispatch(signOutSuccess());
        })
    }
}

export const signUp = (newUser) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then(response => {
            return firestore.collection('users').doc(response.user.uid)
            .set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        })
        .then(() => {
            dispatch(signUpSuccess());
        })
        .catch(err => {
            dispatch(signUpError(err));
        })
    }
}