import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Countup from 'react-countup'
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: {active, deaths, recovered, todayCases, todayDeaths, todayRecovered, updated} }) => {
    if(!active){
        return 'Loading....';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total of Infected</Typography>
                        <Typography variant="h5"><Countup start={0} end={todayCases} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Active cases today</Typography>
                        <Typography color="textSecondary"><Countup start={0} end={todayCases} duration={2.5} separator="," /></Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total of Recovered</Typography>
                        <Typography variant="h5"><Countup start={0} end={recovered} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Recovered cases today</Typography>
                        <Typography color="textSecondary"><Countup start={0} end={todayRecovered} duration={2.5} separator="," /></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.dealth)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total of Deaths</Typography>
                        <Typography variant="h5"><Countup start={0} end={deaths} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Death cases today</Typography>
                        <Typography color="textSecondary"><Countup start={0} end={todayDeaths} duration={2.5} separator="," /></Typography>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;