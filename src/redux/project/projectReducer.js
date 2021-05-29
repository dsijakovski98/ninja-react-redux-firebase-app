import * as projectTypes from './projectTypes';

const initialState = {
    loading: false,
    projects: [
        {id: '1', title: 'Help me find Peach!', content: 'blah blah blah'},
        {id: '2', title: 'Collect all the stars!', content: 'blah blah blah'},
        {id: '3', title: 'Egg hunt with Yoshi!', content: 'blah blah blah'},
    ],
    error: ''
};

const projectReducer = (prevState = initialState, action) => {
    switch(action.type) {
        case projectTypes.CREATE_PROJECT_SUCCESS:
            console.log('Create project success!', action.payload);
            break;
        case projectTypes.CREATE_PROJECT_ERROR:
            console.log('Create project error!', action.payload);
            break;

        default: return prevState;
    }

    return prevState;
}

export default projectReducer;