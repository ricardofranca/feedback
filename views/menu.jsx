import React from 'react';

export default class Menu extends React.Component {

  render() {

    return (
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="/login">Log In</a>
        <a className="mdl-navigation__link" href="/register">Register</a>
      </nav>
    )
  }

}
