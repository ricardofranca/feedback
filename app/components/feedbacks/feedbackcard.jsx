import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import moment from 'moment';

export default class FeedbackCard extends Component {

  static propTypes = {
    feedback: React.PropTypes.object.isRequired,
    children: React.PropTypes.any,
  }

  getPeriod = () => {
    const { feedback } = this.props;
    const start = moment(feedback.start).format('MMMM Do YYYY');
    const finish = moment(feedback.finish).format('MMMM Do YYYY');
    return `${start} a ${finish}`;
  }

  render() {
    const { feedback } = this.props;
    const period = this.getPeriod();

    return (
      <Card key={`feedback-${feedback.id}`} className="feedback">
        <CardHeader
          title={feedback.description}
          subtitle={period}
          avatar={<Avatar size={80} src={feedback.User.imageUrl} />}
        />
        <CardText className="feedback-invited-list">
          {this.props.children}
        </CardText>
      </Card>
    );
  }
}
