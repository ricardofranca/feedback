import React from 'react';
import Default from './default';
import Landing from './landing';

export default class Index extends React.Component {

  render() {

    return (
      <Default>
        <Landing user={this.props.user} />
      </Default>
    )
  }

}
