import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import authReducer   from "./authReducer/authReducer";
import { appReducer } from "./appReducer/appReducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = [thunk]
// this is also middleware
if(process.env.NODE_ENV === 'development'){
    middleware.push(logger)
}

const rootReducer = combineReducers({authReducer,appReducer})
export const store = legacy_createStore(rootReducer,applyMiddleware(...middleware))