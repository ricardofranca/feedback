import React from 'react';
import Default from './default';

export default class Register extends React.Component {

  render() {

    return (
      <Default>
        <div className="mdl-layout mdl-js-layout">
          <main className="mdl-layout__content">

            <div className="card-login-register mdl-card mdl-shadow--2dp">
              <div className="mdl-card__supporting-text">

                <form action="/register" method="post" autoComplete="off">

                <ul className="login-list mdl-list">
                  <li className="mdl-list__item">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input autoComplete="off" className="mdl-textfield__input" type="text" name="username"/>
                        <label className="mdl-textfield__label" htmlFor="username">Username</label>
                    </div>
                  </li>

                  <li className="mdl-list__item">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" name="email"/>
                        <label className="mdl-textfield__label" htmlFor="email">Email</label>
                    </div>
                  </li>

                  <li className="mdl-list__item">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input autoComplete="off" className="mdl-textfield__input" type="password" name="password"/>
                        <label className="mdl-textfield__label" htmlFor="password">Password</label>
                    </div>
                  </li>
                  <li className="mdl-list__item">
                    <button type="submit" className="mdl-button mdl-js-button mdl-button--raised">
                      Login
                    </button>
                  </li>
                </ul>

                </form>

              </div>
            </div>

          </main>
        </div>
      </Default>
    )
  }

}
