import React from 'react';
import Register from 'components/user/Register';

export default ({ onSubmit, onChange, user }) => {
  return (
    <Register onSubmit={onSubmit} onChange={onChange} user={user} />
  );
}
