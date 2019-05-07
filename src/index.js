import React from 'react';
// import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import initialState from './constants/InitialState';
import App from './components/App';
import libraryReducer from './reducers/library-reducer';

const store = createStore(libraryReducer, applyMiddleware(thunk));

ReactDOM.render(

    <Provider store={store}>
      <App />
    </Provider>,

document.getElementById('root'));
