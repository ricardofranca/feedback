import React, { PropTypes } from 'react'

class Toolbar extends React.Component {
  render() {
    return (
      <header className="mdc-toolbar mdc-toolbar--fixed">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <a className="material-icons">menu</a>
          <span className="mdc-toolbar__title">Title</span>
        </section>
        <section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
          <button><i className="material-icons">exit_to_app</i></button>
        </section>
      </header>
    );
  }
}

export default Toolbar;
