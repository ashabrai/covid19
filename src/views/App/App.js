import React from 'react';
import styles from './App.module.css'
import { Route, BrowserRouter} from 'react-router-dom';
import Routes from '../../routes/Routes';
import History from '../../routes/History';
import Homepage from '../Homepage/Homepage';
import Country from '../Country/Country';
import State from '../State/State';
import Chart from '../Chart/Chart';
import DisplayAdditionalData from '../DisplayAdditionalData/DisplayAdditionalData';
import DropDownDescription from '../DropDownDescription/DropDownDescription';

function App() {
  return (
    <div className={styles.container}>
        <BrowserRouter>
        <Route history={History}>{Routes}</Route>
        <Homepage/>
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
