import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import rest from './restful';

import api from './api';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FeedbacksTheme from './theme';
import Menu from './global/menu.js';
import Profile from './profile';

import Invites from './invites/invites.js';
import Invite from './invites/invite.js';
import Feedbacks from './feedbacks/feedbacks.js';

import database from './database';
import middlewareInvite from './offline';

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

    const reducer = combineReducers({
      ...api,
      routing: routerReducer,
      rest: () => rest,
      ...rest.reducers
    });

    const store = compose(
        applyMiddleware(thunkMiddleware, middlewareInvite)
    )(createStore)(reducer);

    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <Route path="/feedbacks" component={Feedbacks} />
            <Route path="/invites" component={Invites} />
            <Route path="/invites/:id" component={Invite}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<Root  />, document.getElementById('app'));