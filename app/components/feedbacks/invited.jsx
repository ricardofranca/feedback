import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import { blue500 } from 'material-ui/styles/colors';

export default class Invited extends React.Component {
  static propTypes = {
    invited: React.PropTypes.object,
  }

  checkDisabled = (invited) => {
    const badgeStyle = {
      top: 10,
      right: 30,
      backgroundColor: blue500,
    };
    let disabled = '';
    if (!invited.feedbacks) {
      badgeStyle.backgroundColor = '#9E9E9E';
      disabled = '-disabled';
    }
    return { badgeStyle, disabled };
  }

  render() {
    const { invited } = this.props;
    const { badgeStyle, disabled } = this.checkDisabled(invited);

    return (
      <Badge
        key={`badge-${invited.id}`}
        badgeContent={invited.feedbacks}
        secondary={!!invited.feedbacks}
        badgeStyle={badgeStyle}
      >
        <Chip
          key={`chip-invited-${invited.id}`}
          className={`invited-chip${disabled}`}
        >
          <Avatar src={invited.url} />
          {invited.name}
        </Chip>
      </Badge>
    );
  }
}
