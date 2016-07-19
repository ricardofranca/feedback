import React from 'react';
import IconButton from 'material-ui/IconButton';
import {yellow500} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

export default class Menu extends React.Component {

  render() {

    const buttonStyle = {
      padding: 0
    };

    const iconStyle = {
      fontSize: '45px',
      color: '#555'
    };

    const bellStyle = {

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
          <div className="mdl-layout--small-screen-only">
            <IconButton
              style={buttonStyle}
              iconStyle={bellStyle}
              iconClassName="fa fa-bell-o" />
          </div>
        </ToolbarGroup>
      </Toolbar>
    )

  }

}
