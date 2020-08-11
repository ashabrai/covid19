import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from '../Cards/MUI-Card/Card';
import {connect} from 'react-redux'
import styles from './Cards.module.css';

const Cards = (props) => {
    const { globalStats } = props;

    if(!globalStats.active){
        return 'Loading....';
    };

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <CardComponent
                    className={styles.infected}
                    cardTitle="World Total Infected"
                    value={globalStats.todayCases}
                    lastUpdated={globalStats.updated}
                    cardSecondaryTitle='Active Cases Today'
                    todayCases={globalStats.todayCases}
                />
                   <CardComponent
                    className={styles.recovered}
                    cardTitle="World Total Recovered"
                    value={globalStats.recovered}
                    lastUpdated={globalStats.updated}
                    cardSecondaryTitle='Recovered Cases Today'
                    todayCases={globalStats.todayRecovered}
                />
                    <CardComponent
                    className={styles.death}
                    cardTitle="World Total Deceased"
                    value={globalStats.deaths}
                    lastUpdated={globalStats.updated}
                    cardSecondaryTitle='Death Cases Today'
                    todayCases={globalStats.todayDeaths}
                />
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state,
});

export default connect(mapStateToProps, null)(Cards);