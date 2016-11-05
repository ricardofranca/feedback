import React, { PropTypes } from 'react';
import Invited from './Invited.jsx';
import { connect } from 'react-redux';

class Inviteds extends React.Component {

  mapInviteds = (invited) => {
		return <Invited invited={invited} />
	}

	render() {
		const { inviteds } = this.props;
		const container = inviteds.map(this.mapInviteds, this);
		return (
      <ul className="demo-list-item mdl-list">
        {container}
      </ul>
		);
	}
}

const mapPropsToState = (state) => {
	return {
    inviteds: state.feedback.inviteds,
	}
}

export default connect(mapPropsToState)(Inviteds);
