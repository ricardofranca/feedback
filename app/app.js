import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Invites from './invites/list';
import Invite from './invites/invite.js';

class App extends React.Component {

  render() {

    return(
      <MuiThemeProvider>
        <div className="mdl-layout mdl-js-layout">
          <main className="mdl-layout__content">
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
          <IndexRedirect to="/invites" />
          <Route path="/invites" component={Invites} />
          <Route path="/invites/:id" component={Invite}/>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<Root  />, document.getElementById('app'));
