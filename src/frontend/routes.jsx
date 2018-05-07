import React from 'react';
import { Route, Switch } from 'react-router';
import Books from 'containers/Books.jsx';

export default () => (
    <Switch>
        <Route exact path="/" component={Books} />
    </Switch>
);
