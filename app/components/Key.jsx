import React, { PropTypes } from 'react'

class Key extends React.Component {
  render () {
    return (
      <li className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
          <i className="material-icons mdl-list__item-icon">favorite_border</i>
          <span className="mdl-badge" data-badge="4">Key</span>
         </span>
      </li>
    )
  }
}

export default Key;
