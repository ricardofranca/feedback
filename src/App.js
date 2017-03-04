import React, { Component, PropTypes } from 'react';
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

class Provider extends Component {

  state = {
    user: Map({
      displayName: 'Christiano Milfont',
      email: '',
      photoURL: '',
      providerId:  '',
      uid: '',
      password: '',
    }),
  }

  dispatch = (action) => {
    if (action.type === 'onChange') {
      const { name, value } = action.payload;
      this.onChange(name, value);
    }
    if (action.type === 'onSubmit') {
      this.onSubmit();
    }
  }

  static childContextTypes = {
    store: PropTypes.object,
    dispatch: PropTypes.func,
  }

  getChildContext() {
    return {
      dispatch: this.onChange,
      store: this.state,
    };
  }

  render() {
    return this.props.children;
  }
}

class App extends Component {

  // componentDidMount() {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword('cmilfont@milfont.org', 'testes55')
  //     .then(user => {
  //       console.log('user', user);
  //       this.setState( { user: this.state.user.merge(user) } );
  //     })
  //     .catch(function(error) {
  //       const { code, message } = error;
  //       console.log(code, message);
  //   });
  // }

  onSubmit = () => {
    const { email, password } = this.state.user.toJS();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({
          user: this.state.user.merge(user)
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChange = (name, value) => {
    const { user } = this.state;
    this.setState({
      user: user.merge({
        [name]: value
      })
    })
  }

  render() {

    // const email = this.state.user.get('email');
    const { user } = this.state;

    return (
      <Provider>
        <div className="App">
          <div>{user.get('email')}</div>
          <Base onSubmit={this.onSubmit} onChange={this.onChange} user={user} />
        </div>        
      </Provider>
    );
  }
}

export default App;
