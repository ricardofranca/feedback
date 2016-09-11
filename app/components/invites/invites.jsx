import React from 'react';
import { connect } from 'react-redux';
import { INVITES, actionRequest } from 'api/actions';
import Invite from 'components/invites/invite.jsx';

@connect((state) => ({
  invites: state.invites,
}))
export default class Invites extends React.Component {

  static propTypes = {
    invites: React.PropTypes.any,
    dispatch: React.PropTypes.func,
  }

  componentDidMount() {
    this.props.dispatch(actionRequest(INVITES));
  }

  mapInvites = invite => (<Invite
    key={`invite-${invite.id}`}
    invite={invite}
    dispatch={this.props.dispatch}
  />)

  render() {
    const list = this.props.invites.map(this.mapInvites, this);

    return (
      <div className="invites">
          {list}
      </div>
    );
  }

}
