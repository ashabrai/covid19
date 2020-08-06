import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import * as action from '../../store/action';
import CountryDropDown from '../CountryDropDown/CountryDropDown';
import styles from './Country.module.css'
import {getCountryNames} from '../../store/selectors'
import { Container } from '@material-ui/core';


const Country = props => {
    useEffect(() => {
        props.requestAllCountries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <Container className={styles.container}>
            <CountryDropDown {...props}/>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        ...state,
        countryNames: getCountryNames(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    requestAllCountries: () => dispatch(action.requestAllCountries())
})

export default connect(mapStateToProps, mapDispatchToProps)(Country);
