import {
    REQUEST_ALL_COUNTRIES_SUCCEEDED,
    REQUEST_ALL_COUNTRIES_FAILED,
    REQUEST_COVID_SUMMARY_SUCCEEDED,
    REQUEST_COVID_SUMMARY_FAILED,
    REQUEST_STATES_SUCCEEDED,
    REQUEST_STATES_FAILED,
    SET_SELECTED_STATE_SUCCEEDED,
    SET_SELECTED_STATE_FAILED,
    SET_SELECTED_STATE_DATA_SUCCEEDED,
    SET_SELECTED_STATE_DATA_FAILED,
    SET_SELECTED_COUNTRY_SUCCEEDED,
    SET_SELECTED_COUNTRY_FAILED,
    SET_SELECTED_COUNTRY_DATA_FAILED,
    SET_SELECTED_COUNTRY_DATA_SUCCEEDED,
} from '../../constants/app';

export const initialState = {
    allCountries: [],
    errors: {},
    globalStats: [],
    states: [],
    selectedState: '',
    selectedCountry: '',
    selectedStateData: [],
    selectedCountryData: [],
}

function covidDataReducer(state = initialState, action) {
    switch(action.type){

        case REQUEST_ALL_COUNTRIES_SUCCEEDED:
            return {
                ...state,
               allCountries: action.payload,
            };

        case REQUEST_ALL_COUNTRIES_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            };

        case REQUEST_COVID_SUMMARY_SUCCEEDED:
            return {
                ...state,
                globalStats: action.payload
            };

        case REQUEST_COVID_SUMMARY_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            };

        case REQUEST_STATES_SUCCEEDED:
            return {
                ...state,
                states: action.payload

            };

        case REQUEST_STATES_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            }

        case SET_SELECTED_STATE_SUCCEEDED: 
            return {
                ...state,
                selectedState: action.payload,
            };

        case SET_SELECTED_STATE_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            };

        case SET_SELECTED_COUNTRY_SUCCEEDED: 
            return {
                ...state,
                selectedCountry: action.payload
            };

        case SET_SELECTED_COUNTRY_FAILED:
            return {
                errors:{
                    ...state.errors
                }
            };
 // --------------------------------------           
        case SET_SELECTED_STATE_DATA_SUCCEEDED:
            return {
                ...state,
                selectedStateData: action.payload,
            };

        case SET_SELECTED_STATE_DATA_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            };

        case SET_SELECTED_COUNTRY_DATA_SUCCEEDED:
            return {
                ...state,
                selectedCountryData: action.payload
            };

        case SET_SELECTED_COUNTRY_DATA_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            };
            default:
                return state;
    }
}

export default covidDataReducer;