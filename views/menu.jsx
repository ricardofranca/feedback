import React from 'react';
import Default from './default';
import Landing from './landing';

export default class Menu extends React.Component {

  render() {

    return (
		<nav className="mdl-navigation mdl-layout--large-screen-only">
	        <a className="mdl-navigation__link" href="/login">Log In</a>
	        <a className="mdl-navigation__link" href="/register">Register</a>
		</nav>
    )
  }

}
