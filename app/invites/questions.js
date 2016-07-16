import React from 'react';
import Question from './question';

export default class Questions extends React.Component {

  render() {

    const questions = [
      <Question invite={this.props.invite} key="question1" onChange={this.props.onChange} iconClassName="fa fa-meh-o" name="negative" />,
      <Question invite={this.props.invite} key="question2" onChange={this.props.onChange} iconClassName="fa fa-smile-o" name="positive" />
    ]

    return(
      <div className="mdl-grid invite-grid">
        {questions}
      </div>
    )
  }

}
