import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { authDispatchers } from 'api/actions';

class Login extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.login();
  }

  onChange = ({ target: { name, value } }) => {
    const fn = this.props.onChange({
      [name]: value,
    });
  }

  render() {
    const { auth } = this.props;
    const errors = auth.getIn(['emailSignIn', 'default', 'errors']);
    const user = auth.getIn(['emailSignIn', 'default', 'form']);
    const errorContainer = errors.toList().map((value, key) => (
        <div key={key}>{value}</div>
    )).toJS();

    return (
      <div className="mdc-layout auth">
        <main className="mdc-layout__content">
          <div className="mdc-card">
            <section className="mdc-card__primary">
              <h1 className="mdc-card__title mdc-card__title--large">Login</h1>
            </section>
            <section className="mdc-card__supporting-text">
              <div className="errors">{errorContainer}</div>
              <form onSubmit={this.onSubmit}>
                <div className="mdc-textfield mdc-textfield--fullwidth">
                  <input id="email" onChange={this.onChange} value={user.get('email')} className="mdc-textfield__input" name="email" type="text" />
                  <label htmlFor="email" className="mdc-textfield__label">Email</label>
                </div>
                <p className="mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg" />
                <div className="mdc-textfield mdc-textfield--fullwidth">
                  <input id="password" onChange={this.onChange} value={user.get('password')} className="mdc-textfield__input" name="password" type="password"/>
                  <label htmlFor="password" className="mdc-textfield__label">Password</label>
                </div>
                <p className="mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg" />
              </form>
            </section>
            <section className="mdc-card__actions">
              <button
                onClick={this.onSubmit}
                className="mdc-button mdc-button--raised mdc-button--primary mdc-ripple-surface"
              >
                Entrar
              </button>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default connect(({ auth }) => ({ auth }), authDispatchers)(Login);
