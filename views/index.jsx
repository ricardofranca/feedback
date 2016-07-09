import React from 'react';
import Default from './default';
import Landing from './Landing';

export default class Index extends React.Component {

  render() {
    return (
      <Default>
        <Landing />
      </Default>
    )
  }
}
