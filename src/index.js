import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './Reducer/Bookreducer/bookReducer';
import { fetchAllBooks } from './actions/Bookactions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllBooks());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
