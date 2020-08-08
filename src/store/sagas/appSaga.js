import { call, put, takeLatest } from 'redux-saga/effects';

import Api from '../api'
import {
    REQUEST_ALL_COUNTRIES,
    REQUEST_COVID_SUMMARY,
    REQUEST_STATES,
    SET_SELECTED_STATE,
    SET_SELECTED_COUNTRY,
    SET_SELECTED_STATE_DATA,
    SET_SELECTED_COUNTRY_DATA
} from '../../constants/app';

import { 
    requestAllCountriesSucceeded,
    requestAllCountriesFailed,
    requestCovidSummarySucceeded, 
    requestCovidSummaryFailed,
    requestStatesSucceeded,
    requestStatesFailed,
    setSelectedStateSucceeded,
    setSelectedCountryDataSucceeded,
    setSelectedCountryDataFailed,
    setSelectedStateDataSucceeded,
    setSelectedStateDataFailed,
    setSelectedCountrySucceeded,
    setSelectedCountryFailed,
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
};

export function* requestStatesGenerator(){
    try {
        const response = yield call(Api.fetchStateName);
        yield put(requestStatesSucceeded(response))
        
    }catch(e){
        yield put(requestStatesFailed(e));

    }
};

export function* setSelectedStateGenerator(action){
    try {
        yield put(setSelectedStateSucceeded(action.payload))
        
    }catch(e){
        yield put(setSelectedStateDataFailed(e));

    }
};

export function* setSelectedStateDataGenerator(action) {
    try{
        yield put(setSelectedStateDataSucceeded(action.payload));

    } catch(e) {
        yield put(setSelectedStateDataFailed(e));
    }
};

export function* setSelectedCountryGenerator(action) {
    try {
        yield put(setSelectedCountrySucceeded(action.payload));
        
    } catch(e) {
        yield put(setSelectedCountryFailed(e));

    };
};

export function* setSelectedCountryDataGenerator(action) {
    try {
        yield put(setSelectedCountryDataSucceeded(action.payload));

    } catch(e) {
        yield put(setSelectedCountryDataFailed(e));
    }
};

export function* appSaga(){
    yield takeLatest(REQUEST_ALL_COUNTRIES, requestAllCountriesGenerator);
    yield takeLatest(REQUEST_COVID_SUMMARY, requestCovidSummaryGenerator);
    yield takeLatest(REQUEST_STATES, requestStatesGenerator);
    yield takeLatest(SET_SELECTED_STATE, setSelectedStateGenerator);
    yield takeLatest(SET_SELECTED_COUNTRY, setSelectedCountryGenerator)
    yield takeLatest(SET_SELECTED_STATE_DATA, setSelectedStateDataGenerator);
    yield takeLatest(SET_SELECTED_COUNTRY_DATA, setSelectedCountryDataGenerator);
};