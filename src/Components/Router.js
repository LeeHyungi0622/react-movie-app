import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Movie from '../Pages/Movie';
import TV from '../Pages/TV';
import Search from '../Pages/Search';
import Detail from '../Pages/Detail';

const Router = () => {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Movie}/>
                <Route exact path="/tv" component={TV}/>
                <Route path="/search" component={Search}/>
                <Route path="/movie/:id" component={Detail}/>
                <Route path="/tv/:id" component={Detail}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </HashRouter>
    );
};

export default Router;