import React from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import history from './History';
import ResultsForAllCountries from '../views/ResultsForAllCountries/ResultsForAllCountries';

const Routes = () => {
    return (
       <Router history={history}>
           <Switch>
                <Route exact path='/' component={ResultsForAllCountries}/>
                <Route exact path='/resultsForAllCountries' component={ResultsForAllCountries}/>
           </Switch>
       </Router>
    )
}

export default Routes
