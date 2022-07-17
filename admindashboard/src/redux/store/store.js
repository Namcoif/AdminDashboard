import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import viewReducer from './../reducers/viewReducer';
import userReducer from './../reducers/userReducer';


const rootReducer = combineReducers({
    view: viewReducer,
    userGetInfo: userReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store;

