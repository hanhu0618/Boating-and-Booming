import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from './Login/Login';
import GameMode from './GameMode/GameMode';
import GameBoard from './GameBoard/GameBoard';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/gamemode' component={GameMode}/>
            <Route exact path='/gameboard' component={GameBoard}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;
