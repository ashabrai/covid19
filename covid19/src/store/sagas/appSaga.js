import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../api'
import {
    REQUEST_ALL_COUNTRIES_DATA
} from '../../constants/app';

import { requestAllCountriesData, requestAllCountriesSucceeded,requestAllCountriesFailed } from '../action';

export function* requestAllCountriesDataGenerator() {
    yield put(requestAllCountriesData());
    try{
        const response = yield call(Api.fetchAllCountriesData);
        yield put(requestAllCountriesSucceeded(response));

    } catch(e){
        yield put(requestAllCountriesFailed(e));
    }
}

export function* appSaga(){
    yield takeLatest(REQUEST_ALL_COUNTRIES_DATA, requestAllCountriesDataGenerator);
}