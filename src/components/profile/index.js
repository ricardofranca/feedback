import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { authDispatchers } from 'api/actions';

class Profile extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.redirectStep4(7762355623);
  }

  render() {
    return (
      <div>
        <button onClick={this.onSubmit}>Entrar</button>
      </div>
    );
  }
}

export default connect(({ auth }) => ({ auth }), authDispatchers)(Profile);
