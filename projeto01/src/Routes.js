import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './components/route';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

import Login from './pages/login/login';
import LoginRecovery from './pages/login/recovery';
import LoginRegister from './pages/login/register';

function src() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            
            <Route admin path="/dashboard" exact component={Dashboard} />

            <Route login path="/login" exact component={Login} />
            <Route login path="/registro" exact component={LoginRegister} />
            <Route login path="/recuperar-acesso" exact component={LoginRecovery} />

            {/* <Route path="/" component={pageError}/> */}
        </Switch>
    )
}

export default src;