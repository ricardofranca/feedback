import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { FEEDBACK_INVITES_INVITE_COMPLETED, INVITES } from 'api/actions';
import Questions from './questions.jsx';

@connect((state) => ({
  offline: state.offline,
}))
class Invite extends React.Component {

  completeVerify = () => {
    this.props.dispatch({ type: FEEDBACK_INVITES_INVITE_COMPLETED });
  }

  update = (ev, value) => {
    const params = {
      id: this.props.invite.id,
    };
    const el = ev.currentTarget.name;
    params[el] = value;
    this.props.dispatch({ type: INVITES.SAVE, payload: params });
  }

  formatStatus = (invite) => {
    const status = {};
    const count = [
      'positive1',
      'positive2',
      'positive3',
      'negative1',
      'negative2',
      'negative3'].reduce((sum, property) => {
        const lenght = (invite[property].trim().length) ? 1 : 0;
        return sum + lenght;
      }, 0);
    if (count === 6) {
      Object.assign(status, {
        border: 0,
        boxShadow: 'none',
      });
    }
    return status;
  }

  verifyOffline = () => {
    if (this.props.offline) {
      console.log('Offline maxu');
    }
  }

  render() {
    this.verifyOffline();
    const { invite } = this.props;

    const statusStyles = this.formatStatus(invite);
    const questions = <Questions invite={invite} onChange={this.update} />;

    const inviteText = `${invite.name} o convida para dar um
    Feedback sobre o que voce admiria que ele pretende
    conservar e melhorar o que pode te incomodar`;

    return (
      <Card className="invite" style={statusStyles}>
        <CardHeader
          title={inviteText}
          subtitle="16 de jul a 20 de jul"
          avatar={invite.url}
        />
        <CardText> {questions} </CardText>
      </Card>
    );
  }

}

Invite.propTypes = {
  dispatch: React.PropTypes.func,
  invite: React.PropTypes.object,
  offline: React.PropTypes.bool,
  params: React.PropTypes.object,
};

export default Invite;
