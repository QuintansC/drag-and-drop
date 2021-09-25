import React from 'react';
import Home from '../pages';
import Login from '../components/initial/Login';
import Cadastro from '../components/initial/Cadastro';
import HomePrincipal from '../pages/homePrincipal';
import Dashboard from '../components/dashboard/Index';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DropzoneProvider } from '../contexts/DropzoneContext';

export default class Routes extends React.Component{
    render(){
        return(
            <DropzoneProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/cadastro" component={Cadastro}/>
                        <Route path="/:username/boards" component={HomePrincipal}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                    </Switch>
                </BrowserRouter>
            </DropzoneProvider>
        )
    }
}
