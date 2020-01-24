import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './note.css';
import {HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import {Provider} from 'react-redux';
import configureStore from "./redux/configureStore";
import * as apiCalls from "./api/apiCalls";


const store = configureStore();
apiCalls.setAuthorizationHeader();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
