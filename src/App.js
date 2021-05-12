import Movies from './Components/Movies';
import Schedule from './Components/Schedule';
import Seats from './Components/Seats';
import Success from './Components/Success';

import './styles/reset.css';
import './styles/style.css';

import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { useState } from 'react';

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Link to='/' exact style={{textDecoration: 'none'}}>
                <div className='top-bar'>CINEFLEX</div> 
            </Link>
            <Switch>
                <Route path="/" exact> 
                    <Movies />
                </Route>
                <Route path='/filme/:movieId'>
                    <Schedule />
                </Route>
                <Route path='/sessao/:sessionId'>
                    <Seats />
                </Route>
                <Route path="/sucesso">
                    <Success />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    );
}