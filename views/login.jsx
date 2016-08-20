import React from 'react';
import formCommons from './formcommons.jsx';

export default class Login extends formCommons(React.Component) {

  render() {
    return (
      <div className="card-login-register mdl-card mdl-shadow--2dp">
        <div className="mdl-card__supporting-text">
          <div className="errors">
            {this.createGlobalMessage()}
          </div>
          <form action="/login" method="post" autoComplete="off">
            <input type="hidden" name="_csrf" value={this.props.csrfToken} />
            <ul className="login-list mdl-list">
              <li className="mdl-list__item">
                {this.createFieldContainer('username', 'Username')}
              </li>
              <li className="mdl-list__item">
                {this.createFieldContainer('password', 'Password', 'password')}
              </li>
              <li className="mdl-list__item">
                <button type="submit" className="mdl-button mdl-js-button mdl-button--raised">
                  Login
                </button>
                <a href="/reset/password" className="reset-password">
                  <i className="fa fa-key" aria-hidden="true" />
                  Reset
                </a>
              </li>
            </ul>
          </form>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a href="/auth/google" className="google-signin">
            <i className="fa fa-google-plus-square" aria-hidden="true" />
          </a>
          <a className="facebook-signin" title="Desabilitado Temporariamente">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

}
