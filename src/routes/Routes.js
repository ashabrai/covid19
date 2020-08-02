import React from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import history from './History';
import ResultsOfCountries from '../views/ResultsOfCountries/components/ResultsOfCountries';
import Homepage from '../views/Homepage/Homepage';

const Routes = () => {
    return (
       <Router history={history}>
           <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/resultsForAllCountries' component={ResultsOfCountries}/>
           </Switch>
       </Router>
    )
}

export default Routes
