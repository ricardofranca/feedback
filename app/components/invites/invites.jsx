import React from 'react';
import { connect } from 'react-redux';
import { INVITES } from 'api/actions';
import Invite from './invite.jsx';

@connect((state) => ({
  invites: state.invites,
}))
class Invites extends React.Component {

  componentDidMount() {
    let id = null;
    if (this.props.params) {
      id = this.props.params.id;
    }
    this.props.dispatch({
      type: INVITES.REQUEST,
      payload: { id },
    });
  }

  mapInvites = invite => <Invite key={`invite-${invite.id}`} invite={invite} />

  render() {
    const list = this.props.invites.map(this.mapInvites);

    return (
      <div className="invites">
          {list}
      </div>
    );
  }

}

Invites.propTypes = {
  params: React.PropTypes.any,
  invites: React.PropTypes.any,
  dispatch: React.PropTypes.element,
};

export default Invites;
