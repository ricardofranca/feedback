import React from 'react';
import Invites from './invites/invites.jsx';
import Feedbacks from './feedbacks/feedbacks.jsx';

export default function () {
  return (
    <div className="profile">
      <Feedbacks />
      <Invites />
    </div>
  );
}
