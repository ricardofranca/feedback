import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Invited = ({ invited: { name } }) => {
	return (
    <li className="mdl-list__item">
	    <span className="mdl-list__item-primary-content">
	      {name}
	    </span>
  	</li>);
}

export default connect(null)(Invited);
