import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Provider } from 'react-redux';
import { history } from "../../store";
import App from '../App';

const Root = ({store, ...props}) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App {...props}/>
        </ConnectedRouter>
    </Provider>
);

export default Root;