import React from 'react';
import Question from 'components/invites/question.jsx';

export default class Questions extends React.Component {

  static propTypes = {
    invite: React.PropTypes.object,
    onChange:  React.PropTypes.func,
  }

  createQuestion = ({ name, iconClassName }) => (<Question
    invite={this.props.invite}
    key={`question-${this.props.invite.id}-${name}`}
    iconClassName={`fa fa-${iconClassName}-o`}
    name={name}
    onChange={this.props.onChange}
  />)

  render() {
    const questions = [
      this.createQuestion({ name: 'negative', iconClassName: 'meh' }),
      this.createQuestion({ name: 'positive', iconClassName: 'smile' }),
    ];

    return (
      <div className="mdl-grid invite-grid">
        {questions}
      </div>
    );
  }

}
