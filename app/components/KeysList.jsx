import React, { PropTypes } from 'react'
import Key from './Key.jsx'

class KeysList extends React.Component {
  render () {
    return (
      <ul className="mdl-list">
        <Key/>
        <Key/>
        <Key/>
      </ul>
    )
  }
}

export default KeysList;
