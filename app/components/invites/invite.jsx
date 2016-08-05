import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { FEEDBACK_INVITES_INVITE_COMPLETED } from 'api/actions';
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
      id: this.props.params.id,
    };
    const el = ev.currentTarget.name;
    params[el] = value;
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

    let name = '';
    let url = '';
    let statusStyles = {};
    let questions = <div />;

    let invite = this.props.invite;

    if (invite) {
      name = invite.name;
      url = invite.url;
      statusStyles = this.formatStatus(invite);
      questions = <Questions invite={invite} onChange={this.update} />;
    }

    const inviteText = `${name} o convida para dar um
    Feedback sobre o que voce admiria que ele pretende
    conservar e melhorar o que pode te incomodar`;

    return (
      <Card className="invite" style={statusStyles}>
        <CardHeader
          title={inviteText}
          subtitle="16 de jul a 20 de jul"
          avatar={url}
        />
        <CardText> {questions} </CardText>
      </Card>
    );
  }

}

Invite.propTypes = {
  dispatch: React.PropTypes.func,
  feedbacks: React.PropTypes.any,
  invite: React.PropTypes.object,
  offline: React.PropTypes.bool,
  params: React.PropTypes.object,
};

export default Invite;
