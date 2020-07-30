import {
    REQUEST_ALL_COUNTRIES,
    REQUEST_ALL_COUNTRIES_SUCCEEDED,
    REQUEST_ALL_COUNTRIES_FAILED
} from '../../constants/app'

export const requestAllCountries = (payload) => ({   
    type: REQUEST_ALL_COUNTRIES,
    payload,
});

export const requestAllCountriesSucceeded = (payload) => ({
    type: REQUEST_ALL_COUNTRIES_SUCCEEDED,
    payload,
})

export const requestAllCountriesFailed = (payload) => ({
    type: REQUEST_ALL_COUNTRIES_FAILED,
    payload,
})