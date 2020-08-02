import idx from 'idx';

export const selectResultsForAllCountries = (state) => 
    idx(state,(_) => _.reducer.allCountriesData);

export const getCovidSummary = state => state.globalStats.Global;

