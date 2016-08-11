import React from 'react';
import Login from './login';
import Register from './register';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <main className="mdl-layout__content">
          <div className="brand-session">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/6rPEhFTFE9c?rel=0&amp;controls=0&amp;showinfo=0"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="user-session">
            <Login {...this.props} />
            <Register {...this.props} />
          </div>
        </main>
      </div>
    );
  }

}
