import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})));

export default store;