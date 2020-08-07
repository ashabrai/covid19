
export const getCovidSummary = state => state.globalStats.Global;

export const getStatesNames = state => state.states.map((state) => state.state)

export const getCountryNames = state => state.allCountries.map((country) => country.country)
