import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import * as action from '../../store/action';
import { getStatesNames } from '../../store/selectors'
import StateDropDown from '../StateDropDown/StateDropDown';
import {Container} from '@material-ui/core';
import styles from './State.module.css'

const State = props => {
    const { requestStates } = props;

    useEffect(() => {
        requestStates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    return (
        <Container className={styles.container}>
            <StateDropDown {...props}/>
        </Container>
    )
};

const mapStateToProps = state => {
    return {
        ...state,
        stateNames: getStatesNames(state) 
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestStates: () => dispatch(action.requestStates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(State);
