import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import formReducers from './reducers/FormReducers';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


const store = createStore(formReducers,composeWithDevTools(applyMiddleware(thunk, logger)));


ReactDOM.render(
 <Provider store ={store}>
 <App />
 </Provider>,
document.getElementById('root')
);


