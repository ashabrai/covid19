import {
    REQUEST_ALL_COUNTRIES,
    REQUEST_ALL_COUNTRIES_SUCCEEDED,
    REQUEST_ALL_COUNTRIES_FAILED,
    REQUEST_COVID_SUMMARY,
    REQUEST_COVID_SUMMARY_SUCCEEDED,
    REQUEST_COVID_SUMMARY_FAILED
} from '../constants/app';

export const requestAllCountries = payload => ({
    type: REQUEST_ALL_COUNTRIES,
    payload,
})

export const requestAllCountriesSucceeded = payload => ({
    type: REQUEST_ALL_COUNTRIES_SUCCEEDED,
    payload,
})

export const requestAllCountriesFailed= payload => ({
    type: REQUEST_ALL_COUNTRIES_FAILED,
    payload,
})

// --------------------------------------------------- 

export const requestCovidSummary = payload => ({
    type: REQUEST_COVID_SUMMARY,
    payload,
})

export const requestCovidSummarySucceeded = payload => ({
    type: REQUEST_COVID_SUMMARY_SUCCEEDED,
    payload,
})

export const requestCovidSummaryFailed = payload => ({
    type: REQUEST_COVID_SUMMARY_FAILED,
    payload,
})