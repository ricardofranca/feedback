import React from 'react';
import Invite from './invite.js';

export default class Invites extends React.Component {

  state = { invites: [] }

  componentDidMount() {

    fetch('/invites.json').then(
      res => res.json().then( this.refreshList )
    );

  }
  
  refreshList = list => {
    this.setState({
      invites: list
    });
  }

  mapInvites = invite => {
    return <Invite key={`invite-${invite.id}`} invite={invite} />
  }

  render() {

    const list = this.state.invites.map(this.mapInvites);

    return(
        <div className="invites">
            {list}
        </div>
    )
  }

}
