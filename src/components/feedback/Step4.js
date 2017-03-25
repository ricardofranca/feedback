import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { authDispatchers } from 'api/actions';

class Step4 extends React.Component {

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
      <div>
        <div>
            <div>foto</div>
            <div>descricao</div>
        </div>

        <div>
            <div>
                positivo
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </div>
            <div>negativo</div>
        </div>
      </div>
    );
  }
}

export default connect(({ auth }) => ({ auth }), authDispatchers)(Step4);
