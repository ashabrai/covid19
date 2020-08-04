import React, { useEffect } from 'react'
import coronaPhoto from '../../assets/corona.jpg';
import {connect} from 'react-redux';
import * as action from '../../store/action';
import Card from '../Card/Card'
// import { getCovidSummary } from '../../store/selectors';
import styles from './Homepage.module.css'
import State from '../State/State';
import Country from '../Country/Country';

const Homepage = (props) => {

    useEffect(() => {
        props.requestCovidSummary()
    }, [])

    return (
            <div className={styles.container}>
               <img src={coronaPhoto} alt='corona-virus' className={styles.photo}/>
               <Card data={props.globalStats}/>
               <Country {...props}/>
               <State {...props}/>
            </div>
    )
}

const mapStateToProps = state => {

    return {
        ...state,
        }
}


const mapDispatchToProps = (dispatch) => ({
    requestCovidSummary: () => dispatch(action.requestCovidSummary())
})
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
