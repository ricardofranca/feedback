import React from 'react';
import { connect } from 'react-redux';
import Invite from './invite.jsx';

@connect((state) => ({
  invites: state.invites,
}))
class Invites extends React.Component {

  componentDidMount() {
    this.props.dispatch({});
  }

  mapInvites = invite => <Invite key={`invite-${invite.id}`} invite={invite} />

  render() {
    const list = this.props.invites.data.map(this.mapInvites);

    return (
      <div className="invites">
          {list}
      </div>
    );
  }

}

Invites.propTypes = {
  invites: React.PropTypes.any,
  dispatch: React.PropTypes.element,
};

export default Invites;
