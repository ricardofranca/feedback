import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import {yellow500} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

@connect( (state) => ({
  bellNotify: state.bellNotify
}) )
export default class Menu extends React.Component {

  render() {

    const buttonStyle = {
      padding: 0,
      top: '10px'
    };

    const iconStyle = {
      fontSize: '45px',
      color: '#555'
    };

    const bellStyle = {
      position: 'absolute',
      left: '-30px'
    }

    const styles = {
      backgroundColor: yellow500
    };

    return(
      <Toolbar style={styles} className="feedbacks-menu">
        <ToolbarGroup>
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton
            style={buttonStyle}
            iconStyle={iconStyle}
            iconClassName="fa fa-smile-o" />
        </ToolbarGroup>
        <ToolbarGroup>
          <div style={bellStyle} className="mdl-layout--small-screen-only">
            <IconButton
              style={buttonStyle}
              iconClassName="fa fa-bell-o" />
          </div>
        </ToolbarGroup>
      </Toolbar>
    )

  }

}
