import React, { Component } from 'react';

import FeedbackCard from 'components/feedbacks/feedbackcard.jsx';
import Invited from 'components/feedbacks/invited.jsx';

export default class Feedback extends Component {
  static propTypes = {
    feedback: React.PropTypes.object,
  }

  mapInvited = invited => <Invited key={`invited-${invited.id}`} invited={invited} />

  render() {
    const { feedback } = this.props;
    const { invited } = feedback;
    const invitedList = (invited) ? feedback.invited.map(this.mapInvited) : [];

    return (
      <FeedbackCard feedback={feedback}>
        {invitedList}
      </FeedbackCard>
    );
  }
}
