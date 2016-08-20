import React from 'react';
import { connect } from 'react-redux';

import Popover from 'material-ui/Popover';
import MenuUI from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { yellow500 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import { Link } from 'react-router';

@connect((state) => ({
  bellNotify: state.bellNotify,
}))
export default class Menu extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
  }

  state = {
    open: false,
  }

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  configureStyles = () => {
    const styles = {
      buttonStyle: {
        padding: 0,
        top: '10px',
      },
      iconStyle: {
        fontSize: '30px',
        color: '#555',
      },
      bellStyle: {
        position: 'absolute',
        left: '-30px',
      },
      global: {
        backgroundColor: yellow500,
      },
    };
    return styles;
  }

  render() {
    const styles = this.configureStyles();

    return (
      <Toolbar style={styles.global} className="feedbacks-menu">
        <ToolbarGroup>
          <IconButton
            style={styles.buttonStyle}
            iconStyle={styles.iconStyle}
            iconClassName="fa fa-search"
          />
        </ToolbarGroup>
        <ToolbarGroup />
        <ToolbarGroup>
          <IconButton
            onTouchTap={this.handleTouchTap}
            style={styles.buttonStyle}
            iconStyle={styles.iconStyle}
            iconClassName="fa fa-smile-o"
          >
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              onTouchTap={this.handleRequestClose}
              anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
              targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
              onRequestClose={this.handleRequestClose}
            >
              <MenuUI>
                <MenuItem
                  primaryText="Feedbacks"
                  containerElement={<Link to="/feedbacks" />}
                />
                <MenuItem
                  primaryText="New"
                  containerElement={<Link to="/feedbacks/new" />}
                />
                <MenuItem primaryText="Settings" />
                <MenuItem
                  containerElement={<Link to="/logout" />}
                  primaryText="Logout"
                />
              </MenuUI>
            </Popover>
          </IconButton>
        </ToolbarGroup>
        <ToolbarGroup>
          <div className="mdl-layout--small-screen-only feedbacks-menu__refresh">
            <i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw" />
          </div>
        </ToolbarGroup>
        <ToolbarGroup>
          <div style={styles.bellStyle} className="mdl-layout--small-screen-only">
            <Link to={'/invites'}>
              <IconButton
                style={styles.buttonStyle}
                iconClassName="fa fa-bell-o"
              />
            </Link>
          </div>
        </ToolbarGroup>
      </Toolbar>
    );
  }

}
