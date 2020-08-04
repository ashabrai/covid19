import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './StateDropDown.module.css';

const StateDropDown = (props) => {

    return (
       <FormControl className={styles.formControl}>
           <NativeSelect>
               <option value="state">State</option>
               {props.stateNames.map((state, i) => <option value={state} key={i}>{state}</option>)}
           </NativeSelect>
       </FormControl>
    )
}


export default StateDropDown;