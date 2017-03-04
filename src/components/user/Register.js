import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';

class Register extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { dispatch } = this.props;
    dispatch({
      type: 'onSubmit'
    });
  }

  onChange = ({ target: { name, value } }) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'onChange',
      payload: { name, value }
    })
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


/* */
class Wrapper extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { store, dispatch } = this.context;
    const { component, mapping } = this.props;
    const defaultProps = mapping(store);
    const props = {
      ...defaultProps,
      dispatch,
    };
    return React.createElement(component, props);
  }

}

const connect = (mapping) => {
  return (cmp) => {
    return <Wrapper component={cmp}  />
  }
}
/* */

const mapStateToProps = function(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Register);
