import React from 'react';
import { useLocation } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
    const location = useLocation()
    return (
        <Switch>
            <Redirect
                exact
                from='/'
                to={{ pathname: '/states', search: location.search }}
            />
        </Switch>
    )
}

export default Routes;