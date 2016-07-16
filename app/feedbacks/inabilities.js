import React from 'react';

export default class Inabilities extends React.Component {

  render() {

    return (
      <ul className="mdl-list">
        <li className="mdl-list__item">
          <div className="mdl-textfield mdl-js-textfield">
              <textarea className="mdl-textfield__input" type="text" name="option1" ></textarea>
          </div>
        </li>
        <li className="mdl-list__item">
          <div className="mdl-textfield mdl-js-textfield">
              <textarea className="mdl-textfield__input" type="text" name="option2" ></textarea>
          </div>
        </li>
        <li className="mdl-list__item">
          <div className="mdl-textfield mdl-js-textfield">
              <textarea className="mdl-textfield__input" type="text" name="option3" ></textarea>
          </div>
        </li>
      </ul>
    )
  }

}
