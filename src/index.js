import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import Root from "./components/Root";
import {configureStore} from "./store";
import { getUser, saveUser } from './storage/storage';

import './index.css';

const history = createBrowserHistory();

const store = configureStore();

const session = {session: getUser() ||  undefined } ;

const rootProps = {
    history,
    store,
    session
};

store.subscribe(() => {
    const { session } = store.getState();
    saveUser(session);
});

ReactDOM.render(<Root {...rootProps}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
