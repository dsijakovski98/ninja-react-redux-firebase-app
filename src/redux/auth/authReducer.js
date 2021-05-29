import authTypes from './authTypes';

const initialState = {
    authError: null
}

const authReducer = (prevState = initialState, action) => {
    switch(action.type) {
        case authTypes.SIGNIN_ERROR:
            console.log("Login Error", action.payload);
            return {
                ...prevState,
                authError: action.payload
            }
        case authTypes.SIGNIN_SUCCESS:
            console.log("Login Success");
            return {
                ...prevState,
                authError: null
            }

        case authTypes.SIGNOUT_SUCCESS:
            console.log("Logout Success");
            return prevState

        case authTypes.SIGNUP_SUCCESS:
            console.log("Signup Success");
            return {
                ...prevState,
                authError: null
            }

        case authTypes.SIGNUP_ERROR:
            console.log("Signup Error", action.payload);
            return {
                ...prevState,
                authError: action.payload
            }

        default: return prevState
    }
}

export default authReducer;