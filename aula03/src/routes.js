import React from 'react';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Route from './components/routes/CustomRoute';

/* Componentes */
const ErrorRoute = () => {
    return (
        <h1>Erro de rota</h1>
    )
}


const ErrorPageNotAuthorized = () => {
    setTimeout(() => {
        console.log("Ok")
        return (
            <Redirect to="/" />
        )
    }, 500)

    return (
        <>
            <h1>Você não tem permissão para acessar essa página.</h1>
        </>
    )
}



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />

                {/* Erro de rota */}
                <Route path="/401" component={ErrorPageNotAuthorized} />
                <Route path="/" component={ErrorRoute} />

            </Switch>
        </BrowserRouter>
    )
}


export default Routes;