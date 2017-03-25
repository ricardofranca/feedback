import React, { PropTypes } from 'react';
import { IndexRedirect, Router, Route } from 'react-router';
import Base from 'components/Base';
import Login from 'components/user/Login';
import Register from 'components/user/Register';
import ChangePassword from 'components/user/ChangePassword';
import Step4 from 'components/feedback/Step4';

import Profile from 'components/profile';
import Invites from 'components/invites';
import Okrs from 'components/invites/Okrs';

const FeedbackRouter = ({ history, validate }) => {

  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/change_password" component={ChangePassword} />
      <Route path="/step4" component={Step4} />
      <Route path="/" component={Base} onEnter={validate}>
        <IndexRedirect to="/profile" />
        <Route path="/profile" component={Profile} />
        <Route path="/invites" component={Invites} />
        <Route path="/invites/:uid" component={Okrs} />
      </Route>
    </Router>
  )
}

export default FeedbackRouter;
