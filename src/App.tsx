/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Drizzle, IDrizzleOptions } from "@drizzle/store"
import { compose } from 'recompose';

import VulcanLayout from './containers/VulcanLayout';

//import client from './client'
import routes from './routes'
import './App.scss';
import drizzleOptions from "./drizzleOptions"
import store, { persistor } from "./store"
import { withReduxStoreProvider, withPersistStore, withDrizzleContextProvider, withStartPollingCoinbase /*, withApolloProvider */ } from './hoc';

//@ts-ignore
const drizzle = new Drizzle(drizzleOptions as IDrizzleOptions, store)

// Containers
class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' render={props => <VulcanLayout routes={routes} {...props} />} />
                </Switch>
            </HashRouter>
        );
    }

    componentDidMount() {
        //@ts-ignore
        this.props.startPollingCoinbase()
    }
}

export default compose(
    withReduxStoreProvider(store),
    withPersistStore(persistor),
    withDrizzleContextProvider(drizzle),
    withStartPollingCoinbase
    // withApolloProvider(client)
    //@ts-ignore
)(App);
