import React, { Component } from 'react';
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

class App extends Component {

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
    console.log(this.state.user.toJS());
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
      <div className="App">
        <div>{user.get('email')}</div>
        <Base onSubmit={this.onSubmit} onChange={this.onChange} user={user} />
      </div>
    );
  }
}

export default App;
