import React from 'react';
import Header from './header';
import Questions from './questions';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class Invite extends React.Component {

  state = { invite: {} }

  constructor(props) {
    super(props);

    if(this.props.invite) {
      this.state.invite = this.props.invite;
    }

  }

  componentDidMount() {
    if(!this.props.invite) {
      fetch(`/invites/${this.props.params.id}.json`).then(
        res => res.json().then( this.refresh )
      );
    }

  }

  refresh = item => {
    this.setState({invite: item});
  }

  update = (ev, value) => {

    const el = ev.currentTarget.name;
    const json = {};
    json[el] = value;
    fetch(`/invites/${this.state.invite.id}.json`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    });

  }

  formatStatus = () => {
    const status = {};
    const invite = this.state.invite;
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

  render() {

    const invite = this.state.invite;
    const name = (invite)? invite.name: '';
    const {url} = invite;
    const onChange = this.update.bind(this);

    const statusStyles = this.formatStatus();

    const inviteText = `${name} o convida para dar um Feedback sobre o que voce admiria que ele pretende conservar e melhorar o que pode te incomodar`;

    return(
      <Card className="invite" style={statusStyles}>
        <CardHeader
          title={inviteText}
          subtitle="16 de jul a 20 de jul"
          avatar={url}
        />
        <CardText>
          <Questions invite={this.state.invite} onChange={onChange} />
        </CardText>
      </Card>
    )
  }

}
