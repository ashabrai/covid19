import {
    REQUEST_ALL_COUNTRIES_DATA_SUCCEEDED,
    REQUEST_ALL_COUNTRIES_DATA_FAILED
} from '../../constants/app';

const initialState = {
    allCountriesData: [],
    errors: {},
}

function covidDataReducer(state = initialState, action) {
    switch(action.type){
        case REQUEST_ALL_COUNTRIES_DATA_SUCCEEDED:
            return {
                ...state,
                allCountriesData: action.payload,
            }
        case REQUEST_ALL_COUNTRIES_DATA_FAILED:
            return {
                ...state,
                errors: {
                    ...state.errors
                }
            }
            default:
                return state;
    }
}

export default covidDataReducer;