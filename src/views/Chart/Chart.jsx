/* eslint-disable no-unused-expressions */
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import styles from './Chart.module.css'

const Chart = (props) => {
    const { selectedState, selectedCountry, selectedCountryData, selectedStateData } = props;
    
    let barData = selectedState ? selectedStateData : selectedCountryData;

    const barChart = () => { 
        if(barData.recovered) {
            return (
                <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)','rgba(255, 0, 0, 0.5)'],
                            data:[barData.active, barData.recovered, barData.deaths],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Results for ${selectedState ? selectedState : selectedCountry}`},
                    }}
                />
            )
        } else {
            return (
                <Bar
                data={{
                    labels: ['Infected', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)','rgba(255, 0, 0, 0.5)'],
                            data:[barData.active, barData.deaths],
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