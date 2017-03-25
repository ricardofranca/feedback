import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import firebase from 'firebase';

import actions from 'api/actions';
import apiReducers from 'api/reducers';
import sagas from 'api/sagas';
import FeedbackRouter from 'Router';

var config = {
  apiKey: "AIzaSyDsEFIob0GX5oBN8b1I9-OVJvq0qGagwnY",
  authDomain: "feedback-53e06.firebaseapp.com",
  databaseURL: "https://feedback-53e06.firebaseio.com",
  storageBucket: "feedback-53e06.appspot.com",
  messagingSenderId: "689132240127"
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
