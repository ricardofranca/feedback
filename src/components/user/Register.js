import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

class Register extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { onSubmit } = this.props;
    onSubmit();
  }

  onChange = ({ target: { name, value } }) => {
    const { onChange } = this.props;
    onChange(name, value);
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="email">Email</label>
          <input onChange={this.onChange} value={user.get('email')} className="" name="email" type="text" /> <br />
          <label htmlFor="password">Password</label>
          <input onChange={this.onChange} value={user.get('password')} name="password" type="password"/><br />
          <button onClick={this.onSubmit}>Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default Register;
