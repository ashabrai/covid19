import React, { useEffect } from 'react'
import coronaPhoto from '../../assets/covid.jpeg';
import {connect} from 'react-redux';
import * as action from '../../store/action';
import Cards from '../Cards/Cards'
import styles from './Homepage.module.css'


const Homepage = (props) => {
    const { requestCovidSummary } = props;
    
    useEffect(() => {
        requestCovidSummary()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
            <div className={styles.container}>
               <img src={coronaPhoto} alt='corona-virus' className={styles.photo}/>
               <Cards {...props}/>
            </div>
    )
};


const mapDispatchToProps = (dispatch) => ({
    requestCovidSummary: () => dispatch(action.requestCovidSummary())
});

export default connect(null, mapDispatchToProps)(Homepage);
