import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import firebase from 'firebase';
import { Map } from 'immutable';

import actions from 'api/actions';
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

  constructor(props) {
    super(props);
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
    const composeEnhancers = composeWithDevTools({});
    this.store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
    this.history = syncHistoryWithStore(browserHistory, this.store);

    sagaMiddleware.run(sagas);
  }

  componentDidMount() {
    window.firebase.auth().onAuthStateChanged(payload => {
      this.store.dispatch({ type: actions.user.logged, payload });
    });
  }

  render() {

    const validate = (nextState, replace, callback) => {
      const { auth } = this.store.getState();
      const email = auth.getIn(['user', 'email']);
      const { location: { pathname: payload } } = nextState;
      if (!email) {
        this.store.dispatch({ payload, type: actions.user.navigation });
      }
      callback();
    }

    return (
      <Provider store={this.store}>
        <FeedbackRouter history={this.history} validate={validate} />
      </Provider>
    );
  }
}

export default App;
