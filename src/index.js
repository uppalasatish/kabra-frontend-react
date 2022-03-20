import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import Store from './Store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={Store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

