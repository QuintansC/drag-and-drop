import React from 'react';
import Home from '../pages';
import Login from '../components/initial/Login';
import Cadastro from '../components/initial/Cadastro';
import HomePrincipal from '../pages/homePrincipal';
import Dashboard from '../components/dashboard/Index';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { DropzoneProvider } from '../contexts/DropzoneContext';

export default class Routes extends React.Component{
    render(){
        return(
            <DropzoneProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route exact path="/home" component={Home}/>
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
