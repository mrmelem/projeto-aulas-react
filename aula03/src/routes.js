import React from 'react';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
/* Funções */

const handleLogin = () => {
    localStorage.setItem('mota', 1);
}

const handleLogout = () => {
    localStorage.removeItem('mota');
}

/* Componentes */
const ErrorRoute = () => {
    return (
        <h1>Erro de rota</h1>
    )
}

const Home = () => {
    return (
        <button onClick={handleLogin}>Estar logado</button>
    )
}

const Admin = () => {
    return (
        <button onClick={handleLogout}>Sair</button>
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

const CustomRoute = ({ admin, ...rest }) => {
    const token = localStorage.getItem('mota')

    if (!token && admin) {
        return <Redirect to="/401" />
    }

    return <Route {...rest} />
}


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute path="/" exact component={Home} />
                <CustomRoute path="/dashboard" exact component={Dashboard} />
                <CustomRoute path="/login" exact component={Login} />

                <CustomRoute path="/admin" exact admin component={Admin} />
                {/* Erro de rota */}
                <CustomRoute path="/401" component={ErrorPageNotAuthorized} />
                <CustomRoute path="/" component={ErrorRoute} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;