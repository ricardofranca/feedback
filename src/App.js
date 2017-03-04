import React, { Component, PropTypes } from 'react';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import firebase from 'firebase';
import { Map } from 'immutable';
import Base from 'components/Base';

const config = {
  apiKey: "AIzaSyDGYMxpnYaAJYyquEUM6Y__yQjhPP_skx0",
  authDomain: "feedback-140018.firebaseapp.com",
  databaseURL: "https://feedback-140018.firebaseio.com",
  storageBucket: "feedback-140018.appspot.com",
  messagingSenderId: "71457068040"
};
firebase.initializeApp(config);
window.firebase = firebase;

const initialState = Map({
  displayName: 'Christiano Milfont',
  email: '',
  photoURL: '',
  providerId:  '',
  uid: '',
  password: '',
});
const userReducer = (state = initialState, { type, payload }) => {
  if (type === 'onChange') {
    const { name, value } = payload;
    return state.merge({ [name]: value });
  }
  return state;
}

const errorsReducer = (state = [], { type, payload }) => {
  if (type === 'onSubmitFailure') {
    return [payload];
  }
  return state;
}

const feedbackMiddleware = (store) => {
  return (dispatch) => {
    return (action) => {

      if (action.type === 'onSubmit') {
        const { user } = store.getState();
        const { email, password } = user.toJS();
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(payload => {
            store.dispatch({ type: 'onSubmitSuccess', payload });
          })
          .catch(payload => {
            console.log(payload);
            store.dispatch({ type: 'onSubmitFailure', payload })
          });
      }

      return dispatch(action);
    }
  }
}

class App extends Component {

  render() {
    const middlewares = [ feedbackMiddleware ];
    const reducers = combineReducers({
      user: userReducer,
      errors: errorsReducer,
      success: (state = [], action) => { return state }
    });
    const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

    return (
      <Provider store={store}>
        <div className="App">
          <Base />
        </div>
      </Provider>
    );
  }
}

export default App;
