import React from 'react';
import styles from './App.module.css'
import { Route, BrowserRouter} from 'react-router-dom';
import Routes from '../../routes/Routes';
import History from '../../routes/History';
import Homepage from '../Homepage/Homepage';

function App() {
  return (
    <div className={styles.container}>
        <BrowserRouter>
        <Route history={History}>{Routes}</Route>
        <Homepage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
