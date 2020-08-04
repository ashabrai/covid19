import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import * as action from '../../store/action';
import { getStatesNames } from '../../store/selectors'
import StateDropDown from '../StateDropDown/StateDropDown';

const State = props => {

    useEffect(() => {
        props.requestStates()
    },[])

    return (
            <StateDropDown stateNames={props.stateNames}/>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        stateNames: getStatesNames(state) 
    }
}
const mapDispatchToProps = (dispatch) => ({
    requestStates: () => dispatch(action.requestStates())
})

export default connect(mapStateToProps, mapDispatchToProps)(State);
