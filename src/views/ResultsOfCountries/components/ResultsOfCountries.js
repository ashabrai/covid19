import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import * as action from '../../../store/action';
import Countries from './Countries';

const ResultsOfCountries = (props) => {
    console.log(props)

    useEffect(() => {
        props.requestAllCountries()
    }, [])


        return (
            <div>
            <Countries {...props}/>
            </div>
        )
    
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = (dispatch) => ({
    requestAllCountries: () => dispatch(action.requestAllCountries()) 
})

export default connect(mapStateToProps,mapDispatchToProps)(ResultsOfCountries);