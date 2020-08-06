/* eslint-disable no-unused-expressions */
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import styles from './Chart.module.css'
import { findStateData, findCountryData } from '../../utils/index';

const Chart = (props) => {
    const { states, selectedState, allCountries, selectedCountry } = props;
    console.log(props)
    
    const displayChartValue = () => {
        if(selectedState){
        let state = findStateData(states, selectedState);
        return state;
    } else if(selectedCountry){
        let country = findCountryData(allCountries, selectedCountry);
        return country;
        }
    }

    const barChart = () => { 
        let barData = displayChartValue();

      return(
      <Bar
        data={{
            labels: ['Infected', 'Deaths'],
            datasets: [
                {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data:[barData[0].active, barData[0].deaths],
                },
            ],
        }}
        options={{
            legend: { display: false },
            title: { display: true, text: `Results for ${selectedState ? selectedState : selectedCountry}`},
                }}
            />
        ) 
    }


    return (
        <div className={styles.container}>
            {selectedState || selectedCountry ? barChart() : null}
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
})



export default connect(mapStateToProps)(Chart)