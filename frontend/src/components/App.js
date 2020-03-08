import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import ParticlesBg from "particles-bg";

import Ni from './Ni';
import Login from './Login';
import Register from './Register';
import Poll from './Poll';

class App extends Component {

    render() {
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route exact path={`/`} component={Login}/>
                    <Route exact path={`/login`} component={Login}/>
                    <Route exact path={`/register`} component={Register}/>
                    <Route exact path={`/poll`} component={Poll}/>
                    <Route component={Ni}/>
                </Switch>
                <ParticlesBg type="random" bg={true}/>
            </BrowserRouter>
        );
    }
}

export default App;

