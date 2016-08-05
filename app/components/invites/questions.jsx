import React from 'react';
import Question from './question.jsx';

class Questions extends React.Component {

  createQuestion = ({ name, iconClassName }) => (<Question
    invite={this.props.invite}
    key={`question-${this.props.invite.id}-${name}`}
    onChange={this.props.onChange}
    iconClassName={`fa fa-${iconClassName}-o`}
    name={name}
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

Questions.propTypes = {
  invite: React.PropTypes.object,
  onChange: React.PropTypes.func,
};

export default Questions;
