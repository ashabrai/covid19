export const findStateData = (states, stateSelected) => {
    let state = states.filter(state => state.state === stateSelected);
    return state;
}

export const findCountryData = (countries, countrySelected) => {
    let country = countries.filter(country => country.country === countrySelected);
    return country;
}