import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { authDispatchers } from 'api/actions';

class Toolbar extends React.Component {
  render() {
    return (
      <header className="mdc-toolbar mdc-toolbar--fixed">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <a className="material-icons">menu</a>
          <span className="mdc-toolbar__title">Feedback</span>
        </section>
        <section className="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
          <button onClick={this.props.logout}><i className="material-icons">exit_to_app</i></button>
        </section>
      </header>
    );
  }
}

export default connect(null, authDispatchers)(Toolbar);
