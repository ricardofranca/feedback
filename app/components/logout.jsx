import React from 'react';

export default class Logout extends React.Component {

  static contextTypes = {
    router: React.PropTypes.func,
  }

  componentDidMount() {
    window.location.reload();
  }

  render() {
    return (
      <p>You have been logged out, you will be redirected shortly to login...</p>
    );
  }
}
