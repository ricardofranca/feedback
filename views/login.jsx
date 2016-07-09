import React from 'react';
import Default from './default';

export default class Login extends React.Component {
  render() {
    return (
      <Default>
        <div className="mdl-layout mdl-js-layout">
          <main className="mdl-layout__content">
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="sample3"/>
              <label class="mdl-textfield__label" for="sample3">Text...</label>
            </div>
          </form>
          <form action="#">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4"/>
              <label class="mdl-textfield__label" for="sample4">Number...</label>
              <span class="mdl-textfield__error">Input is not a number!</span>
            </div>
          </form>
          </main>
        </div>
      </Default>
    )
  }
}
