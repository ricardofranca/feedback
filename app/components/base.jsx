
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FeedbacksTheme from 'theme';
import Menu from './menu.jsx';
import Profile from './profile.jsx';

function Base({ children }) {
  let profile = <div />;
  if (!children) {
    profile = <Profile />;
  }

  return (
    <MuiThemeProvider muiTheme={getMuiTheme(FeedbacksTheme)}>
      <div>
        <Menu />
        <main className="">
          {profile}
          {children}
        </main>
      </div>
    </MuiThemeProvider>
  );
}

Base.propTypes = {
  children: React.PropTypes.element,
};

export default Base;
