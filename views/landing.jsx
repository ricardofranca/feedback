import React from 'react';
import Login from './login';
import Register from './register';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <main className="mdl-layout__content">
          <div className="user-session">
            <Login {...this.props} />
            <Register {...this.props} />
          </div>
        </main>
      </div>
    );
  }

}
