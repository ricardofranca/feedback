import React from 'react';
import { connect } from 'react-redux';

import { async } from 'redux-api';

import Header from './header';
import Questions from './questions';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import  {FEEDBACK_INVITES_INVITE_COMPLETED} from '../api';

@connect( (state) => ({
  rest: state.rest,
  invites: state.invites,
  offline: state.offline
}) )
export default class Invite extends React.Component {

  componentDidMount() {
    if(!this.props.invite) {
      const {dispatch, rest} = this.props;
      const params = {
        id: this.props.params.id
      };
      dispatch(rest.actions.invites.get(params));
    }

  }

  completeVerify = () => {
      this.props.dispatch({ type: FEEDBACK_INVITES_INVITE_COMPLETED });
  }

  update = (ev, value) => {

    const {dispatch, rest} = this.props;
    let params = {
      id: this.props.params.id
    };

    const el = ev.currentTarget.name;
    params[el] = value;

    let action = (cb)=> rest.actions.invites.put( params, cb);

    async(dispatch, action, this.completeVerify.bind(this));

  }

  formatStatus = (invite) => {
    const status = {};
    const count = [ 'positive1',
        'positive2',
        'positive3',
        'negative1',
        'negative2',
        'negative3'].reduce(
          (count, property) => {
            count += (invite[property].trim().length)? 1 : 0;
            return count;
          }, 0
      );
      if(count === 6) {
        Object.assign(status, {
          border: 0,
          boxShadow: 'none'
        });
      }
    return status;
  }

  verifyOffline = () => {
    if(this.props.offline) {
      console.log("Offline maxu");

      //let invite = this.props.invite;
      //database.insert('invite', invite);

    }
  }

  render() {

    this.verifyOffline();

    const onChange = this.update.bind(this);

    let name = '';
    let url = '';
    let statusStyles = {};
    let questions = <div></div>;

    let invite = this.props.invite;

    if( !invite && this.props.invites.data.length) {
      invite = this.props.invites.data[0];
    }

    if( invite ) {
      name = invite.name;
      url =  invite.url;
      statusStyles = this.formatStatus(invite);
      questions = <Questions invite={invite} onChange={onChange} />
    }

    const inviteText = `${name} o convida para dar um Feedback sobre o que voce admiria que ele pretende conservar e melhorar o que pode te incomodar`;

    return(
      <Card className="invite" style={statusStyles}>
        <CardHeader
          title={inviteText}
          subtitle="16 de jul a 20 de jul"
          avatar={url}
        />
        <CardText> {questions} </CardText>
      </Card>
    )
  }

}
