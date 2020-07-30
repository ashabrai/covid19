import { put, takeLatest, call} from 'redux-saga/effects';

import {
    requestAllCountries,
    requestAllCountriesSucceeded,
    requestAllCountriesFailed
} from '../actions'

import {
    REQUEST_ALL_COUNTRIES
} from '../../constants/app'

import Api from '../api';


export function* requestAllCountriesGenerator(action) {
    yield put(requestAllCountries());
    try{
        const response = yield call(Api.fetchAllCountries);
        yield put(requestAllCountriesSucceeded(response))
    }catch(e){
        yield put(requestAllCountriesFailed(e.message))
    }
}

function* covidSaga(){
    yield takeLatest(REQUEST_ALL_COUNTRIES, requestAllCountriesGenerator)
}

export default covidSaga();