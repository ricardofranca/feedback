import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import { yellow500 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import { Link } from 'react-router';

import { FEEDBACKS } from 'api/actions';

@connect((state) => ({
  bellNotify: state.bellNotify,
}))
export default class Menu extends React.Component {

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

  handleOpen = () => {
    this.props.dispatch({ type: FEEDBACKS.NEW, payload: true });
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
            onTouchTap={this.handleOpen}
            style={styles.buttonStyle}
            iconStyle={styles.iconStyle}
            iconClassName="fa fa-smile-o"
          />
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
