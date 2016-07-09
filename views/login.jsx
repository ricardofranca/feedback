import React from 'react';
import Default from './default';

export default class Login extends React.Component {

  render() {

    return (
      <Default>
        <div className="mdl-layout mdl-js-layout">
          <main className="mdl-layout__content">

            <div className="card-login mdl-card mdl-shadow--2dp">
              <div className="mdl-card__supporting-text">

                <form action="/login" method="post">

                <ul class="login-list mdl-list">
                  <li class="mdl-list__item">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" name="username"/>
                        <label className="mdl-textfield__label" for="username">Username...</label>
                    </div>
                  </li>
                  <li class="mdl-list__item">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="password" name="password"/>
                        <label className="mdl-textfield__label" for="password">Password...</label>
                    </div>
                  </li>
                  <li class="mdl-list__item">
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
