import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Login from './pages/login/index.jsx';
import Dashboard from './pages/dashboard/index.jsx';
import Cadastro from './pages/cadastro'

function src() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/admin" exact component={Dashboard} />
            <Route path="/cadastro" exact component={Cadastro} />
        </Switch>
    )
}

export default src;