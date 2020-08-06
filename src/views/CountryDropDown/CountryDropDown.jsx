import React from 'react'
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryDropDown.module.css';
import * as action from '../../store/action';
import { getCountryNames } from '../../store/selectors';
import { connect } from 'react-redux';


const CountryDropDown = (props) => {

    const handleCountryChange = (country) => {
        props.setSelectedCountry(country);

    }
    return (
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue="" variant="outlined" onChange={(e) => handleCountryChange(e.target.value)}> 
               <option value="Country">Country</option>
               {props.countryNames.map((country, i) => <option value={country} key={i}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}

const mapStateToProps = state => ({
    ...state,
    countryNames: getCountryNames(state)
})

const mapDispatchToProps = (dispatch) => ({
    setSelectedCountry: (value) => dispatch(action.setSelectedCountry(value))
})  

export default connect(mapStateToProps, mapDispatchToProps)(CountryDropDown);