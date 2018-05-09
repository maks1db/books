import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from 'containers/Layout.jsx';
import Books from 'containers/Books.jsx';

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Books} />
        </Switch>
    </Layout>
);
