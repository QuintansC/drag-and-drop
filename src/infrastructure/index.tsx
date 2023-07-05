import React, { useContext } from 'react';
import Home from './pages/home';
import Login from '../presentation/controllers/signin';
import Cadastro from '../presentation/controllers/signup';
import Quadros from './pages/quadros/index';
import KanBan from './pages/homeKanban/index';
import Templates from './pages/templates/index';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { DropzoneProvider } from '../utils/contexts/DropzoneContext';
import GettingStarted from './pages/cloneuser3/getting-started';
import Highlights from './pages/cloneuser3/highlights';
import Tables from './pages/cloneuser3/tables';
import Members from './pages/cloneuser3/members';
import Account from './pages/cloneuser3/account';
import Error from './pages/404';

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
                        <Route path={`/${username}/boards`} component={Quadros}/>
                        <Route exact path="/kanBan" component={KanBan}/> 
                        <Route exact path="/templates" component={Templates}/>                  
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
