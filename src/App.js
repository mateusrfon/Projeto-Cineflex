import Movies from './Components/Movies';
import Schedule from './Components/Schedule';
import Session from './Components/Session';
import Success from './Components/Success';

import './styles/reset.css';
import './styles/style.css';

import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { useState } from 'react';

export default function App() {
    const [success, setSuccess] = useState({movie: '', date: '', time: '', tickets: [], buyer: '', cpf: ''});
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
                    <Session success={success} setSuccess={setSuccess}/>
                </Route>
                <Route path="/sucesso">
                    <Success success={success}/>
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    );
}