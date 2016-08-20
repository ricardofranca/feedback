import React from 'react';
import Default from './default';
import Landing from './landing';
import SinglePageApplication from './spa';

export default class Index extends React.Component {

  render() {
    const { user, csrfToken } = this.props;

    if (user) {
      console.log("User.id", user.id);
    }

    const page = (user) ?
      <SinglePageApplication {...this.props} /> : <Landing {...this.props} />;

    return (
      <Default csrfToken={csrfToken}>
        {page}
      </Default>
    );
  }

}
