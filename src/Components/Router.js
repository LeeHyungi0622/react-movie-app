import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Movie from '../Pages/Movie';
import TV from '../Pages/TV';
import Search from '../Pages/Search';

const Router = () => {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Movie}/>
                <Route path="/tv" component={TV}/>
                <Route path="/search" component={Search}/>
            </Switch>
        </HashRouter>
    );
};

export default Router;