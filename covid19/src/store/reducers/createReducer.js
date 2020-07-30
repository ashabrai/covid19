import { combineReducers } from 'redux'
import appReducer from './appReducer'
import {connectRouter} from 'connected-react-router'

export default function createReducer(injectedReducers){
    return (history) => 
    combineReducers({
        app: appReducer,
        router: connectRouter(history),
        ...injectedReducers,
    })
}