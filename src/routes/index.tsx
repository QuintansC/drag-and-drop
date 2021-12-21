import React, { useContext } from 'react';
import Home from '../pages/home';
import Login from '../components/initial/Login';
import Cadastro from '../components/initial/Cadastro';
import HomeLogado from '../pages/homeLogado';
import KanBan from '../pages/homeKanban';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { DropzoneProvider } from '../contexts/DropzoneContext';
import {  } from '../components/dashboard/NavComponents';
import GettingStarted from '../pages/cloneuser3/getting-started';
import Highlights from '../pages/cloneuser3/highlights';
import Tables from '../pages/cloneuser3/tables';
import Members from '../pages/cloneuser3/members';
import Account from '../pages/cloneuser3/account';
import Error from '../pages/404';

export default class Routes extends React.Component{
    render(){
        let username = sessionStorage.getItem('usernameTrello')
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
                        <Route exact path={`/${username}/${username}/boards`}>
                            <Redirect to={`/${username}/boards`}/>
                        </Route>
                        <Route path={`/${username}/boards`} component={HomeLogado}/>
                        <Route exact path="/kanBan" component={KanBan}/>             
                        <Route component={Error}/>
                    </Switch>

                    <Switch>
                        <Route path="/cloneuser3/getting-started" component={GettingStarted}/>
                        <Route exact path="/cloneuser3/highlights" component={Highlights}/>
                        <Route exact path="/cloneuser3/tables" component={Tables}/>
                        <Route exact path="/cloneuser3/members" component={Members}/>     
                        <Route exact path="/cloneuser3/account" component={Account}/>               
                    </Switch>
                </BrowserRouter>
            </DropzoneProvider>
        )
    }
}
