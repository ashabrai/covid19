import React from 'react'
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryDropDown.module.css';
import * as action from '../../store/action';
import { getCountryNames } from '../../store/selectors';
import { connect } from 'react-redux';
import {findCountryData} from '../../utils/index'

const CountryDropDown = (props) => {
    const { setSelectedState, setSelectedCountry,countryNames, allCountries, 
            setSelectedCountryData
        } = props;

    const handleCountryChange = (country) => {
        if(country === "Country"){
            setSelectedState('');
            setSelectedCountry('');
            setCountryData('');
        } else {
            setSelectedState('');
            setSelectedCountry(country);
            setCountryData(country);
        }
    };

    const setCountryData = (country) => {
        let data = findCountryData(allCountries, country);
        setSelectedCountryData(data[0]);
    };

    return (
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue="" variant="outlined" onChange={(e) => handleCountryChange(e.target.value)}> 
               <option value="Country">Country</option>
               {countryNames.map((country, i) => <option value={country} key={i}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
};

const mapStateToProps = state => ({
    ...state,
    countryNames: getCountryNames(state)
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedCountry: (value) => dispatch(action.setSelectedCountry(value)),
    setSelectedState: (value) => dispatch(action.setSelectedState(value)),
    setSelectedCountryData: (value) => dispatch(action.setSelectedCountryData(value))
});  

export default connect(mapStateToProps, mapDispatchToProps)(CountryDropDown);