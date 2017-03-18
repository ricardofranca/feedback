import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import firebase from 'firebase';
import { Map } from 'immutable';

import apiReducers from 'api/reducers';
import sagas from 'api/sagas';
import FeedbackRouter from 'Router';

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

    const sagaMiddleware = createSagaMiddleware({
      onError: (error) => {
        //window.airbrake.notify(error);
      },
    });

    const middlewares = [
      routerMiddleware(browserHistory),
      sagaMiddleware,
    ];
    const reducers = combineReducers({
      routing: routerReducer,
      ...apiReducers
    });
    const store = createStore(reducers, compose(applyMiddleware(...middlewares)));
    const history = syncHistoryWithStore(browserHistory, store);

    sagaMiddleware.run(sagas);

    const validate = (nextState, replace, callback) => {
      const { auth } = store.getState();
      const email = auth.getIn(['user', 'email']);
      const { location: { pathname: payload } } = nextState;
      if (payload  === '/profile' && !email) {
        replace('/login');
      }
      callback();
    }

    return (
      <Provider store={store}>
        <FeedbackRouter history={history} validate={validate} />
      </Provider>
    );
  }
}

export default App;
