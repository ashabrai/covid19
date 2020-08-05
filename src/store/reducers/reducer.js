import {
    REQUEST_ALL_COUNTRIES_SUCCEEDED,
    REQUEST_ALL_COUNTRIES_FAILED,
    REQUEST_COVID_SUMMARY_SUCCEEDED,
    REQUEST_COVID_SUMMARY_FAILED,
    REQUEST_STATE_DATA_SUCCEEDED,
    REQUEST_STATE_DATA_FAILED,
    REQUEST_STATES_SUCCEEDED,
    REQUEST_STATES_FAILED,
    SET_SELECTED_STATE,
    SET_SELECTED_COUNTRY
} from '../../constants/app';

export const initialState = {
   allCountries: [],
    errors: {},
    globalStats: [],
    data:[],
    states: [],
    selectedState: '',
    selectedCountry: '',
}

function covidDataReducer(state = initialState, action) {
    switch(action.type){
        case REQUEST_ALL_COUNTRIES_SUCCEEDED:
            return {
                ...state,
               allCountries: action.payload,
            }
        case REQUEST_ALL_COUNTRIES_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            }
        case REQUEST_COVID_SUMMARY_SUCCEEDED:
            return {
                ...state,
                globalStats: action.payload
            }

        case REQUEST_COVID_SUMMARY_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            }

        case REQUEST_STATE_DATA_SUCCEEDED:
            return{
                ...state,
                data: action.payload,

            }
        case REQUEST_STATE_DATA_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            }
        case REQUEST_STATES_SUCCEEDED:
            return {
                ...state,
                states: action.payload

            }
        case REQUEST_STATES_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            }
        case SET_SELECTED_STATE: 
            return {
                ...state,
                selectedState: action.payload,
            }
        case SET_SELECTED_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload
            }
            default:
                return state;
    }
}

export default covidDataReducer;