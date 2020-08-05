/* eslint-disable no-unused-expressions */
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import styles from './Chart.module.css'

const Chart = (props) => {
    const { states, selectedState } = props;

    const findStateData = () => {
        let state = states.filter(state => state.state === selectedState);
        console.log(state, 'state obj')
        return state;
    }

    const barChart = () => {
       let state = findStateData();
      return (
      <Bar
        data={{
            labels: ['Infected', 'Deaths'],
            datasets: [
                {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data:[state[0].active, state[0].deaths],
                },
            ],
        }}
        options={{
            legend: { display: false },
            title: { display: true, text: `Results for ${selectedState}`},
                }}
            />
      )
    }

    return (
        <div className={styles.container}>
            {selectedState ? barChart() : null}
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(Chart)