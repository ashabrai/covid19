import {
    REQUEST_ALL_COUNTRIES,
    REQUEST_ALL_COUNTRIES_SUCCEEDED,
    REQUEST_ALL_COUNTRIES_FAILED,
    REQUEST_COVID_SUMMARY,
    REQUEST_COVID_SUMMARY_SUCCEEDED,
    REQUEST_COVID_SUMMARY_FAILED,
    REQUEST_STATE_DATA,
    REQUEST_STATE_DATA_SUCCEEDED,
    REQUEST_STATE_DATA_FAILED,
    REQUEST_STATES,
    REQUEST_STATES_SUCCEEDED,
    REQUEST_STATES_FAILED,
    SET_SELECTED_STATE,
    SET_SELECTED_COUNTRY,
    SET_SELECTED_STATE_SUCCEEDED
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

// ---------------------------------------------------
export const requestStateData = payload => ({
    type: REQUEST_STATE_DATA,
    payload,
});

export const requestStateDataSucceeded = payload => ({
    type: REQUEST_STATE_DATA_SUCCEEDED,
    payload,
});

export const requestStateDataFailed = payload => ({
    type: REQUEST_STATE_DATA_FAILED,
    payload,
})

// ---------------------------------------------------

export const requestStates = payload => ({
    type: REQUEST_STATES,
    payload,
});

export const requestStatesSucceeded = payload => ({
    type: REQUEST_STATES_SUCCEEDED,
    payload,
});

export const requestStatesFailed = payload => ({
    type: REQUEST_STATES_FAILED,
    payload,
})

// ---------------------------------------------------

export const setSelectedState = payload => ({
    type: SET_SELECTED_STATE,
    payload,
})

export const setSelectedStateSucceeded = payload => ({
    type: SET_SELECTED_STATE_SUCCEEDED,
    payload
})

export const setSelectedCountry = payload => ({
    type: SET_SELECTED_COUNTRY,
    payload,
})