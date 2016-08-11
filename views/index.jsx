import React from 'react';
import Default from './default';
import Landing from './landing';
import SinglePageApplication from './spa';

export default class Index extends React.Component {

  render() {
    const { user } = this.props;
    console.log("CADE O USER? ", user);
    const page = (user) ?
      <SinglePageApplication {...this.props} /> : <Landing {...this.props} />;

    return (
      <Default>
       Era pra ter coiso aqui
        {page}
      </Default>
    );
  }

}
