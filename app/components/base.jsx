
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Hammer from 'react-hammerjs';
import { Root } from 'redux-react-local';
import { Sagas } from 'react-redux-saga';
import FeedbacksTheme from 'theme';
import Menu from './menu.jsx';
import Profile from './profile.jsx';

export default class Base extends React.Component {

  static propTypes = {
    children: React.PropTypes.element,
    route: React.PropTypes.object,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  onSwipeRight = event => {
    if (this.props.location.pathname === '/invites') {
      this.context.router.push('/feedbacks');
    } else if (this.props.location.pathname === '/feedbacks') {
      this.context.router.push('/search');
    }
  }

  onSwipeLeft = event => {
    if (this.props.location.pathname === '/feedbacks') {
      this.context.router.push('/invites');
    } else if (this.props.location.pathname === '/search') {
      this.context.router.push('/feedbacks');
    }
  }

  render() {
    const profile = (this.props.children) ? this.props.children : <Profile />;
    console.log(this.props);
    return (
      <Sagas middleware={this.props.route.sagaMiddleware}>
        <MuiThemeProvider muiTheme={getMuiTheme(FeedbacksTheme)}>
          <Hammer onSwipeLeft={this.onSwipeLeft} onSwipeRight={this.onSwipeRight}>
            <div>
              <Menu />
              <main className="">
                <Root>
                  {profile}
                </Root>
              </main>
            </div>
          </Hammer>
        </MuiThemeProvider>
      </Sagas>
    );
  }
}
