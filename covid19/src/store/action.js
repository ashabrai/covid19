import {
    REQUEST_ALL_COUNTRIES_DATA,
    REQUEST_ALL_COUNTRIES_DATA_SUCCEEDED,
    REQUEST_ALL_COUNTRIES_DATA_FAILED
} from '../constants/app';

export const requestAllCountriesData = payload => ({
    type: REQUEST_ALL_COUNTRIES_DATA,
    payload,
})

export const requestAllCountriesSucceeded = payload => ({
    type: REQUEST_ALL_COUNTRIES_DATA_SUCCEEDED,
    payload,
})

export const requestAllCountriesFailed= payload => ({
    type: REQUEST_ALL_COUNTRIES_DATA_FAILED,
    payload,
})

