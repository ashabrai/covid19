import React from 'react';
import styles from './App.module.css'
import { Route, BrowserRouter} from 'react-router-dom';
import Routes from '../../routes/Routes';
import History from '../../routes/History';
import Country from '../Country/Country';
import State from '../State/State';
import Chart from '../Chart/Chart';
import DisplayAdditionalData from '../DisplayAdditionalData/DisplayAdditionalData';
import DropDownDescription from '../DropDownDescription/DropDownDescription';
import CoronaPhoto from '../../assets/covid.jpeg';
import Cards from '../Cards/Cards'
import Homepage from '../Homepage/Homepage'

function App() {
  return (
    <div className={styles.container}>
        <BrowserRouter>
        <Route history={History}>{Routes}</Route>
        <img src={CoronaPhoto} alt='corona-virus' className={styles.photo}/>
        <Homepage/>
        <Cards/>
        <DropDownDescription/>
        <Country/>
        <State/>
        <DisplayAdditionalData/>
        <Chart/>
      </BrowserRouter>
    </div>
  );
}

export default App;
