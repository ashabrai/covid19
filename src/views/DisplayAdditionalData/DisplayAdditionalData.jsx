/* eslint-disable no-unused-expressions */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    minWidth: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
});

const DisplayAdditionalData = (props) => {

  const { selectedCountryData, selectedStateData, selectedCountry, selectedState } = props;

  const classes = useStyles();

  let data = selectedCountry ? selectedCountryData : selectedStateData;

  const displayData = () => {
    return(
      <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
        {data.state ? data.state : data.country}        
        </Typography>
        <Typography color="textSecondary">
          Covid Results:
        </Typography>
        <Typography variant="body2" component="p">
          Number of cases today: {data.todayCases}
        </Typography>
        <Typography variant="body2" component="p">
          Number of Deaths: {data.todayDeaths}
        </Typography>
      </CardContent>
    </Card>
      )
    };


  return (
    <div>
      { selectedCountry || selectedState ? displayData() : null }
    </div>
  );
};

const mapStateToProps = state => ({
    ...state,
});

export default connect(mapStateToProps, null)(DisplayAdditionalData);