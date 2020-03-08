import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import ParticlesBg from "particles-bg";

import Ni from './Ni';
import Login from './Login';

class App extends Component {

    render() {
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route exact path={`/`} component={Login}/>
                    <Route exact path={`/login`} component={Login}/>
                    <Route component={Ni}/>
                </Switch>
                <ParticlesBg type="random" bg={true}/>
            </BrowserRouter>
        );
    }
}

export default App;

