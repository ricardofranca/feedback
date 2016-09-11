import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Questions from 'components/invites/questions.jsx';
import { INVITES, actionSave } from 'api/actions';

export default class Invite extends React.Component {

  static propTypes = {
    invite: React.PropTypes.object,
    onChange:  React.PropTypes.func,
  }

  update = (ev, value) => {
    const params = {
      payload: {
        id: this.props.invite.id,
      },
    }
    const name = ev.currentTarget.name;
    params.payload[name] = value;
    const action = Object.assign(actionSave(INVITES), params);
    this.props.dispatch(action);
  }

  render() {
    const {invite} = this.props;
    const questions = <Questions invite={invite} onChange={this.update} />;
    return (
      <Card className="invite">
        <CardHeader
          title={invite.description}
          subtitle={invite.period}
          avatar={invite.url}
        />
        <CardText>
          {questions}
        </CardText>
      </Card>
    );
  }

}
