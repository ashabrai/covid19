import React from 'react'
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryDropDown.module.css';

const CountryDropDown = (props) => {
    return (
       <FormControl className={styles.formControl}>
           <NativeSelect>
               <option value="Country">Country</option>
               {props.countryNames.map((country, i) => <option value={country} key={i}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}


export default CountryDropDown;