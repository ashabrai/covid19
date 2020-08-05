import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import * as action from '../../store/action';
import { getStatesNames } from '../../store/selectors'
import StateDropDown from '../StateDropDown/StateDropDown';
import {Container} from '@material-ui/core';
import styles from './State.module.css'

const State = props => {
    useEffect(() => {
        props.requestStates()
    },[])

    
    return (
        <Container className={styles.container}>
            <StateDropDown {...props}/>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        stateNames: getStatesNames(state) 
    }
}
const mapDispatchToProps = (dispatch) => ({
    requestStates: () => dispatch(action.requestStates()),
    setSelectedState: () => dispatch(action.setSelectedState())

})

export default connect(mapStateToProps, mapDispatchToProps)(State);
