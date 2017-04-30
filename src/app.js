import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import promise from 'redux-promise'
// import {ConnectedRouter, routerMiddleware} from 'react-router-redux'

import reducers from './reducers';
import history from './history'
import routes from './routes'

// const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(promise));

render(
    <Provider store={store}>
        {/*<ConnectedRouter history={history}>*/}
            {routes}
        {/*</ConnectedRouter>*/}
    </Provider>,
    document.getElementById('app')
);

window.store = store;