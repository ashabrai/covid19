import { call, put, takeLatest } from 'redux-saga/effects';

import Api from '../api'
import {
    REQUEST_ALL_COUNTRIES,
    REQUEST_COVID_SUMMARY
} from '../../constants/app';

import { requestAllCountriesSucceeded,requestAllCountriesFailed,requestCovidSummarySucceeded, requestCovidSummaryFailed } from '../action';

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

export function* appSaga(){
    yield takeLatest(REQUEST_ALL_COUNTRIES, requestAllCountriesGenerator);
    yield takeLatest(REQUEST_COVID_SUMMARY, requestCovidSummaryGenerator);

}