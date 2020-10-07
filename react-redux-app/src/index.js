import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import formReducers from './reducers/FormReducers';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


const store = createStore(formReducers,applyMiddleware(thunk));


ReactDOM.render(
 <Provider store ={store}>
 <App />
 </Provider>,
document.getElementById('root')
);


