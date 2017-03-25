import React from 'react';

export default ({ invite }) => {
  if (invite) {
    const feedback = invite.get('feedback').first();

    const description = feedback.get('description');
    const email = feedback.getIn(['owner', 'email']);
    return (
      <div>
        <div>{description}</div>
        <div>{email}</div>
      </div>
    );
  } else {
    return (<div>não achou</div>);
  }

}
