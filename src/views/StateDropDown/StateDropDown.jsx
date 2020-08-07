import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './StateDropDown.module.css';
import { connect } from 'react-redux';
import * as action from '../../store/action';
import { findStateData } from '../../utils';
import { getStatesNames } from '../../store/selectors';

const StateDropDown = (props) => {
    const {setSelectedState, setSelectedCountry, 
        states, setSelectedStateData, stateNames
    } = props;

    const handleStateChange = (usaState) => {
        setSelectedCountry('');
        setSelectedState(usaState);
        setStateData(usaState);
    }

    const setStateData = (state) => {
        let data = findStateData(states, state);
        setSelectedStateData(data[0])
    }

    return (
       <FormControl variant="outlined" className={styles.formControl}>
           <NativeSelect defaultValue="" variant="outlined" onChange={(e) => handleStateChange(e.target.value)}> 
               <option value="state">State</option>
               {stateNames.map((state, i) => <option value={state} key={i}>{state}</option>)}
           </NativeSelect>
       </FormControl>
    )
}

const mapStateToProps = state => ({
    ...state,
    stateNames: getStatesNames(state)
})

const mapDispatchToProps = (dispatch) => ({
    setSelectedState: (value) => dispatch(action.setSelectedState(value)),
    setSelectedCountry: (value) => dispatch(action.setSelectedCountry(value)),
    setSelectedStateData: (value) => dispatch(action.setSelectedStateData(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(StateDropDown)