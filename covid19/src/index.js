import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory as createHistory } from 'history';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

 
const rootElement = document.getElementById('root');

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
<Provider store={store}> 
<ConnectedRouter history={history}>
<App />
</ConnectedRouter>
</Provider>,
rootElement  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
