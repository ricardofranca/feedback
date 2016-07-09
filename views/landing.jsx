import React from 'react';
import Menu from './menu';

export default class Landing extends React.Component {

  render() {

    return (
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Feedback</span>
            <div className="mdl-layout-spacer"></div>
            <Menu />
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Feedback</span>
          <Menu />
        </div>
        <main className="mdl-layout__content">
        
        </main>
      </div>
    )
  }

}
