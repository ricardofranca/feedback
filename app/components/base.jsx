
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Hammer from 'react-hammerjs';
import FeedbacksTheme from 'theme';
import Menu from './menu.jsx';
import Profile from './profile.jsx';

export default class Base extends React.Component {

  static propTypes = {
    children: React.PropTypes.element,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  onSwipeRight = event => {
    if (this.props.location.pathname === '/invites') {
      this.context.router.push('/feedbacks');
    }
  }

  onSwipeLeft = event => {
    if (this.props.location.pathname === '/feedbacks') {
      this.context.router.push('/invites');
    }
  }

  render() {
    const profile = (this.props.children) ? this.props.children : <Profile />;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(FeedbacksTheme)}>
        <Hammer onSwipeLeft={this.onSwipeLeft} onSwipeRight={this.onSwipeRight}>
          <div>
            <Menu />
            <main className="">
              {profile}
            </main>
          </div>
        </Hammer>
      </MuiThemeProvider>
    );
  }
}
