import React from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

export default class Header extends React.Component {

  getAvatar = () => {
    const {avatar_url} = this.props;
    return (avatar_url) ?
      <Avatar size={80} src={avatar_url} /> :
      <Avatar icon={<FontIcon className="material-icons">person</FontIcon>} />;
  }

  render() {

    const avatar = this.getAvatar();
    const inviteText = `${this.props.name} o convida para dar um Feedback sobre o que voce admiria que ele pretende conservar e melhorar o que pode te incomodar`;

    return (
      <div className="invite-header">
        <div className="invite-header__avatar">
          {avatar}
        </div>
        <div className="invite-header__info">
          <div className="invite-header__info-text">
          {inviteText}
          </div>
          <div className="invite-header__info-period">
            16 de jul a 20 de jul
          </div>
        </div>
      </div>
    )

  }
}
