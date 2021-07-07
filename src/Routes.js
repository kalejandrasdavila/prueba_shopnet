import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CovidListContainer from './containers/CovidListContainer';

const Routes = () =>{
    
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/covid' component={CovidListContainer} />
        </Switch>
    )
}

export default Routes;

