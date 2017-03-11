import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import firebase from 'firebase';
import { Map } from 'immutable';

import apiReducers from 'api/reducers';
import feedbackMiddleware from 'api/middlewares';

import Base from 'components/Base';
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
    const middlewares = [
      routerMiddleware(browserHistory),
      feedbackMiddleware
    ];
    const reducers = combineReducers({
      routing: routerReducer,
      ...apiReducers
    });
    const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <Router history={history}>

          <Route path="/" component={Base}>
            <IndexRedirect to="/products" />
            <Route path="/products" component={Products} />
            <Route path="/products/*" component={Products} />
          </Route>

        </Router>
      </Provider>
    );
  }
}

export default App;
