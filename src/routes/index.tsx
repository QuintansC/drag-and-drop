import React from 'react';
import Home from '../pages/home';
import Login from '../components/initial/Login';
import Cadastro from '../components/initial/Cadastro';
import HomeLogado from '../pages/homeLogado';
import KanBan from '../pages/homeKanban';

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
                        <Route path="/:username/boards" component={HomeLogado}/>
                        <Route exact path="/kanBan" component={KanBan}/>
                    </Switch>
                </BrowserRouter>
            </DropzoneProvider>
        )
    }
}
