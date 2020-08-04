import { call, put, takeLatest } from 'redux-saga/effects';

import Api from '../api'
import {
    REQUEST_ALL_COUNTRIES,
    REQUEST_COVID_SUMMARY,
    REQUEST_STATE_DATA,
    REQUEST_STATES,
} from '../../constants/app';

import { 
    requestAllCountriesSucceeded,
    requestAllCountriesFailed,
    requestCovidSummarySucceeded, 
    requestCovidSummaryFailed,
    requestStateDataSucceeded,
    requestStateDataFailed,
    requestStatesSucceeded,
    requestStatesFailed
} from '../action';

export function* requestAllCountriesGenerator() {
    try{
        const response = yield call(Api.fetchAllCountries);
        yield put(requestAllCountriesSucceeded(response));

    } catch(e){
        yield put(requestAllCountriesFailed(e));
    }
}

export function* requestCovidSummaryGenerator(){
    try {
        const response = yield call(Api.fetchCovidSummary);
        yield put(requestCovidSummarySucceeded(response))
        
    }catch(e){
        yield put(requestCovidSummaryFailed(e));

    }
}
// export function* requestStateDataGenerator(action){
//     // const { state } = action.payload;
//     try {
//         const response = yield call(Api.fetchStateData, state);
//         yield put(requestStateDataSucceeded(response))
        
//     }catch(e){
//         yield put(requestStateDataFailed(e));

//     }
// }

export function* requestStatesGenerator(){
 
    try {
        const response = yield call(Api.fetchStateName);
        yield put(requestStatesSucceeded(response))
        
    }catch(e){
        yield put(requestStatesFailed(e));

    }
}

export function* appSaga(){
    yield takeLatest(REQUEST_ALL_COUNTRIES, requestAllCountriesGenerator);
    yield takeLatest(REQUEST_COVID_SUMMARY, requestCovidSummaryGenerator);
    // yield takeLatest(REQUEST_STATE_DATA, requestStateDataGenerator);
    yield takeLatest(REQUEST_STATES, requestStatesGenerator);



}