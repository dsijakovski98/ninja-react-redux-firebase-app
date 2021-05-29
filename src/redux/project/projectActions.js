import * as projectActions from './projectTypes';
import { firestore } from '../../config/fbConfig';

const createProjectSuccess = project => {
    return {
        type: projectActions.CREATE_PROJECT_SUCCESS,
        payload: project
    }
}

const createProjectError = err => {
    return {
        type: projectActions.CREATE_PROJECT_ERROR,
        payload: err
    }
}



export const createProject = (project, history) => {
    return (dispatch, getState) => {
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;

        // Make async call to database
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: uid,
            createdAt: new Date()
        })
        .then(() => {
            history.push('/');
            dispatch(createProjectSuccess(project)); 
        })
        .catch(err => {
            dispatch(createProjectError(err));
        })

    }
}