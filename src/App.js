import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { Map } from 'immutable';

import apiReducers from 'api/reducers';
import feedbackMiddleware from 'api/middlewares';

import Products from 'components/products';

const config = {
  apiKey: "AIzaSyDGYMxpnYaAJYyquEUM6Y__yQjhPP_skx0",
  authDomain: "feedback-140018.firebaseapp.com",
  databaseURL: "https://feedback-140018.firebaseio.com",
  storageBucket: "feedback-140018.appspot.com",
  messagingSenderId: "71457068040"
};
firebase.initializeApp(config);
window.firebase = firebase;

class App extends Component {

  render() {
    const middlewares = [ feedbackMiddleware ];
    const reducers = combineReducers({ ...apiReducers });
    const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

    return (
      <Provider store={store}>
        <div className="App">
          <Products entity="products" />
        </div>
      </Provider>
    );
  }
}

export default App;
