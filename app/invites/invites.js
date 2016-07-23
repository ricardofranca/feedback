import React from 'react';
import { connect } from 'react-redux';
import Invite from './invite.js';

@connect( (state) => ({
  rest: state.rest,
  invites: state.invites
}) )
export default class Invites extends React.Component {

  componentDidMount() {
    const {dispatch, rest} = this.props;
    dispatch(rest.actions.invites.sync());
  }

  mapInvites = invite => {
    return <Invite key={`invite-${invite.id}`} invite={invite} />
  }

  render() {

    const list = this.props.invites.data.map(this.mapInvites);

    return(
        <div className="invites">
            {list}
        </div>
    )
  }

}
