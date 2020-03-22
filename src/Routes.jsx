import React from 'react';
import { BrowserRouter as Router, Route, Switch } from  'react-router-dom';

import Todo from './Todo/Todo';
import About from './About/About';

export default (props) => (
    <Router>
        <Switch>
            <Route exact path="/todo">
                <Todo/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route path="*">
                <Todo/>
            </Route>
        </Switch>
    </Router>
)