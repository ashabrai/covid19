import { REQUEST_ALL_COUNTRIES } from '../../constants/app';

const initialState = {
    allCountries: [],
}

function AppReducer( state = initialState, action ){
     switch(action.type){
        case REQUEST_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
            };
            default:
                return state;
    }
}

export default AppReducer;