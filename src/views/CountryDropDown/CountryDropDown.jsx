import React from 'react'
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryDropDown.module.css';
import * as action from '../../store/action';


const CountryDropDown = (props) => {
    const handleStateChange = (country) => {
        props.setSelectedCountry(country);

    }
    return (
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue="" variant="outlined" onChange={(e) => handleStateChange(e.target.value)}> 
               <option value="Country">Country</option>
               {props.countryNames.map((country, i) => <option value={country} key={i}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = (dispatch) => ({
    setSelectedCountry: (value) => dispatch(action.setSelectedCountry(value))
})  

export default (mapStateToProps, mapDispatchToProps)(CountryDropDown);