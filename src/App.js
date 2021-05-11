import Movies from './Components/Movies';
import Schedule from './Components/Schedule';
import Seats from './Components/Seats';
import Success from './Components/Success';

import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const movie = {id: 37};
const session = {id: 240};

export default function App() {
    return (
        <>
        <BrowserRouter>
            On busines baby
            <Switch>
                <Route path="/" exact> 
                    <Movies />
                </Route>
                <Route path={`/filme/${movie.id}`}>
                    <Schedule />
                </Route>
                <Route path={`/sessao/${session.id}`}>
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