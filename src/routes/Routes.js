import React from 'react'
import { Router, Switch, Route } from 'react-router-dom';
import history from './History';
import Homepage from '../views/Homepage/Homepage';

const Routes = () => {
    return (
       <Router history={history}>
           <Switch>
                <Route exact path='/' component={Homepage}/>
           </Switch>
       </Router>
    )
}

export default Routes
