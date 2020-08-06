import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './StateDropDown.module.css';
import { connect } from 'react-redux';
import * as action from '../../store/action';

const StateDropDown = (props) => {

    const handleStateChange = (usaState) => {
        props.setSelectedState(usaState);

    }

    return (
       <FormControl variant="outlined" className={styles.formControl}>
           <NativeSelect defaultValue="" variant="outlined" onChange={(e) => handleStateChange(e.target.value)}> 
               <option value="state">State</option>
               {props.stateNames.map((state, i) => <option value={state} key={i}>{state}</option>)}
           </NativeSelect>
       </FormControl>
    )
}

const mapStateToProps = state => ({
    ...state,

})

const mapDispatchToProps = (dispatch) => ({
    setSelectedState: (value) => dispatch(action.setSelectedState(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(StateDropDown)