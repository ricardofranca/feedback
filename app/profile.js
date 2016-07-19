import React from 'react';
import Invites from './invites/invites.js';
import Feedbacks from './feedbacks/feedbacks.js';

export default class Profile extends React.Component {

  render() {
    return (
      <div className="profile">
        <Feedbacks />
        <Invites />
      </div>
    );
  }

}
