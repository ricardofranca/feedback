import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { authDispatchers } from 'api/actions';
// import { Step4Feedback } from 'components/feedback/Step4Feedback';

import { IndexRoute } from 'react-router';

class Step4 extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.login();
  }

  onChange = ({ target: { name, value } }) => {
    const fn = this.props.updateFormFeedback({
      [name]: value,
    });
  }

  render() {


    const { auth } = this.props;
    const { profile } = this.props;
    var inviteId = this.props.params.inviteId;

    const feedback = profile.getIn(['invites', inviteId]);
    const negatives = profile.getIn(['invites', inviteId, 'negatives']);


    //TODO: a key do map está vindo o index ao invés da chave
    const negativesContainer = negatives.toList().map((value, key) => (
      <input onChange={this.onChange} type="text" name={'negatives-a-' + key} value={value.toJS().description} />
    )).toJS();


    // const negativesContainer2 = negatives.map((value, key) => (
    //   <input onChange={this.onChange} type="text" name={'negatives-a-' + key} value={value.toJS().description} />
    // )).toJS();

    console.log('temp', negativesContainer);
    debugger;

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

        {/*<div>
          <div>Positive</div>
          <div>
            <div className="step4-input">
              <input type="text" />
            </div>
            <div className="step4-input">
              <input type="text" />
            </div>
            <div className="step4-input">
              <input type="text" />
            </div>
          </div>
        </div>*/}
        <br />

        {negativesContainer}

        {/*<div>
          <div>Negative</div>
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>*/}

      </div>
    );
  }
}

export default connect(({ auth, profile }) => ({ auth, profile }), authDispatchers)(Step4);
