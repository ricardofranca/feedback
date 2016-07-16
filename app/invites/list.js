import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Invite from './invite.js';

export default class Invites extends React.Component {

  mapInvites = invite => {
    return <Invite key={`invite-${invite.id}`} invite={invite} />
  }

  render() {

    const list = this.props.invites.map(this.mapInvites);

    return(
      <MuiThemeProvider>
        <div className="invites">
            {list}
        </div>
      </MuiThemeProvider>
    )
  }

}
