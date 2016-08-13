import React from 'react';
import Default from './default';
import formCommons from './formcommons.jsx';

export default class Reset extends formCommons(React.Component) {

  render() {
    return (
      <Default>
        <div className="card-login-register mdl-card mdl-shadow--2dp">
          <div className="mdl-card__supporting-text">
            <div className="errors">
              {this.createGlobalMessage()}
            </div>
            <form action="/reset/password" method="post" autoComplete="off">
              <ul className="login-list mdl-list">
                <li className="mdl-list__item">
                  {this.createFieldContainer('email', 'Email')}
                </li>
                <li className="mdl-list__item">
                  <button type="submit" className="mdl-button mdl-js-button mdl-button--raised">
                    Reset
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </Default>
    );
  }

}
