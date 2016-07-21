import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FeedbacksTheme from './theme';
import Menu from './global/menu.js';
import Profile from './profile';

import Invites from './invites/invites.js';
import Invite from './invites/invite.js';
import Feedbacks from './feedbacks/feedbacks.js';

injectTapEventPlugin();

class App extends React.Component {

  render() {

    let profile = <div></div>;
    if(!this.props.children) {
      profile = <Profile />;
    }

    return(
      <MuiThemeProvider muiTheme={getMuiTheme(FeedbacksTheme)}>
        <div>
          <Menu />
          <main className="">
            {profile}
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }

}

class Root extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/feedbacks" component={Feedbacks} />
          <Route path="/invites" component={Invites} />
          <Route path="/invites/:id" component={Invite}/>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<Root  />, document.getElementById('app'));