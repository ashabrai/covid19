import React, { useEffect } from 'react'
import {connect} from 'react-redux';
import * as action from '../../store/action';
import styles from './Homepage.module.css'


const Homepage = (props) => {
    const { requestCovidSummary } = props;
    
    useEffect(() => {
        requestCovidSummary()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
            <div className={styles.container}>
            </div>
    )
};


const mapDispatchToProps = (dispatch) => ({
    requestCovidSummary: () => dispatch(action.requestCovidSummary())
});

export default connect(null, mapDispatchToProps)(Homepage);
